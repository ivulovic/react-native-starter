import React, { useState, useEffect } from "react";
import * as RNLocalize from "react-native-localize";
import RNFS from "react-native-fs";
import i18n from "i18n-js";
import memoize from "lodash.memoize";
import {
  I18nManager,
  Platform,
} from "react-native";
import { LanguageContext } from "./LanguageContext";
import useForceUpdate from "hooks/useForceUpdate";


const translate = memoize(
  (key: string, config: any) => i18n.t(key, config),
  (key: string, config: any) => (config ? key + JSON.stringify(config) : key),
);

const returnEmpty = (value: string): string => '';


const setI18nConfig = async () => {
  const translationsDir = await (Platform.OS === "android"
    ? RNFS.readDirAssets("translations")
    : RNFS.readDir(RNFS.MainBundlePath + "/translations"));

  const translationPaths = translationsDir
    .filter(({ isFile, name }) => isFile() && name.endsWith(".json"))
    .reduce((all, { name, path }) => {
      const languageTag = name.replace(".json", "");
      return { ...all, [languageTag]: path };
    }, {});

  // fallback if no available language fits
  const fallback = { languageTag: "en", isRTL: false };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationPaths)) ||
    fallback;

  const fileContent = await (Platform.OS === "android"
    // @ts-ignore
    ? RNFS.readFileAssets(translationPaths[languageTag], "utf8")
    // @ts-ignore
    : RNFS.readFile(translationPaths[languageTag], "utf8"));

  // clear translation cache
  // @ts-ignore
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.translations = { [languageTag]: JSON.parse(fileContent) };
  i18n.locale = languageTag;
};


export default function LanguageProvider(props: any) {
  const [isTranslationsLoaded, setIsTranslationsLoaded] = useState(false);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    setI18nConfig() // set initial config
      .then((v) => {
        setIsTranslationsLoaded(true);
        RNLocalize.addEventListener("change", handleLocalizationChange);
      })
      .catch((error) => {
        console.error(error);
      });
    return () => {
      RNLocalize.removeEventListener("change", handleLocalizationChange);
    }
  }, [])

  const handleLocalizationChange = () => {
    setI18nConfig()
      .then(() => forceUpdate())
      .catch((error) => {
        console.error(error);
      });
  };

  return <LanguageContext.Provider value={{
    locale: i18n.locale || 'en',
    translate: !isTranslationsLoaded ? returnEmpty : translate
  }}>
    {React.Children.only(props.children)}
  </LanguageContext.Provider>;
}
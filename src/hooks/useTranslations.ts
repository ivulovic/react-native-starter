import { useState, useEffect, useContext } from 'react';
// import {
//   I18nManager,
//   Platform,
// } from "react-native";
// import * as RNLocalize from "react-native-localize";
// import RNFS from "react-native-fs";
// import i18n from "i18n-js";
// import memoize from "lodash.memoize";
// import useForceUpdate from 'hooks/useForceUpdate';
import { LanguageContext } from 'providers/LanguageProvider/LanguageContext';

// const returnEmpty = (value: any) => '';

// const setI18nConfig = async () => {
//   const translationsDir = await (Platform.OS === "android"
//     ? RNFS.readDirAssets("translations")
//     : RNFS.readDir(RNFS.MainBundlePath + "/translations"));

//   const translationPaths = translationsDir
//     .filter(({ isFile, name }) => isFile() && name.endsWith(".json"))
//     .reduce((all, { name, path }) => {
//       const languageTag = name.replace(".json", "");
//       return { ...all, [languageTag]: path };
//     }, {});

//   // fallback if no available language fits
//   const fallback = { languageTag: "en", isRTL: false };

//   const { languageTag, isRTL } =
//     RNLocalize.findBestAvailableLanguage(Object.keys(translationPaths)) ||
//     fallback || '';

//   const fileContent = await (Platform.OS === "android"
//     // @ts-ignore
//     ? RNFS.readFileAssets(translationPaths[languageTag], "utf8")
//     // @ts-ignore
//     : RNFS.readFile(translationPaths[languageTag], "utf8"));

//   translate.cache.clear();
//   I18nManager.forceRTL(isRTL);

//   i18n.translations = { [languageTag]: JSON.parse(fileContent) };
//   i18n.locale = languageTag;
// };

// const translate = memoize(
//   (key: any, config: any) => i18n.t(key, config),
//   (key: any, config: any) => (config ? key + JSON.stringify(config) : key),
// );

export default function useTranslations() {
  const ctx = useContext(LanguageContext);
  return ctx;
  // return
  // return ({
  //   translate: !isTranslationsLoaded ? returnEmpty : translate,
  // })

}
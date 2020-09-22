import 'react-native-gesture-handler';
// ? expo inserts this by default?

import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Image
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from 'containers/pages/Home';
import FriendsScreen from 'containers/pages/Friends';
import { FriendsContext } from 'containers/pages/Friends/FriendsContext';
// import LocaleProvider from 'providers/LocaleProvider';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import LanguageProvider from 'providers/LanguageProvider';
const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png";
const Stack = createStackNavigator();

function LogoHome(): JSX.Element {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: logo }}
    />
  );
}
interface State {
  possibleFriends: Array<string>;
  currentFriends: Array<string>;
}
const initialState: State = {
  possibleFriends: [
    'Alice',
    'Bob',
    'Sammy',
    'Ivan',
    'Ja'
  ],
  currentFriends: [],
}
const App = (): JSX.Element => {
  const [state, setState] = React.useState(initialState);

  const addFriend = (index: number) => {
    const {
      currentFriends,
      possibleFriends,
    } = state;

    // Pull friend out of possibleFriends
    const [addedFriend] = possibleFriends.splice(index, 1)

    // And put friend in currentFriends
    currentFriends.push(addedFriend)

    // Finally, update the app state
    setState({
      currentFriends,
      possibleFriends,
    })
  }

  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, [])

  return (
    <>
      <LanguageProvider>
        <FriendsContext.Provider value={
          {
            currentFriends: state.currentFriends,
            possibleFriends: state.possibleFriends,
            addFriend: addFriend
          }
        }>
          <StatusBar barStyle="dark-content" />
          {/* <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}> */}
          {/* <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen dadadadadadadadadadadadadak to see your edits.
              </Text>
            </View>
          </View> */}
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
              }}
            >
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerTitle: props => <LogoHome /> }}
              />
              <Stack.Screen
                name="Friends"
                component={FriendsScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
          {/* <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View> */}
          {/* </ScrollView>
        </SafeAreaView> */}
        </FriendsContext.Provider>
      </LanguageProvider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

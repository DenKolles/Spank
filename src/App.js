import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {View} from 'react-native';
import {SafeAreaView, StyleSheet} from 'react-native';

import {RootNavigator} from './navigators/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import {GoogleSignin, GoogleSigninButton, statusCodes,} from '@react-native-google-signin/google-signin';


const App: () => Node = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  

  async function onGoogleButtonPress() {
    // Get the user's ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  function GoogleSignIn() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }   
        />
      </View>
    );
  }

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '922360239960-j6tg82l1vp0prvio45eqdbcvhfsc7uoh.apps.googleusercontent.com',
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  if (!user) {
    return GoogleSignIn();
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

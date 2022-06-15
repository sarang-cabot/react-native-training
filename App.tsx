/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {GOOGLE_ICON, FB_ICON, APPLE_ICON} from './constatnts';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome Back</Text>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas
          mi non sed ut odio. Non, justo, sed facilisi et.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Username , Email & Phone Number"
            placeholderTextColor="#666161"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#666161"
          />
          <Text style={styles.forgotPasswort}>Forgot Password ?</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <View style={styles.socialIconsRow}>
          <View style={styles.iconsContainer}>
            <Image
              style={styles.iconImage}
              source={{
                uri: GOOGLE_ICON,
              }}
            />
          </View>
          <View style={styles.iconsContainer}>
            <Image
              style={styles.iconImage}
              source={{
                uri: FB_ICON,
              }}
            />
          </View>
          <View style={styles.iconsContainer}>
            <Image
              style={styles.iconImage}
              source={{
                uri: APPLE_ICON,
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  heading: {
    color: '#464444',
    fontWeight: '900',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Outfit-ExtraBold',
  },
  content: {
    color: '#000000',
    marginHorizontal: 30,
    marginVertical: 20,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 13,
    fontFamily: 'Outfit-Bold',
  },
  textInput: {
    height: 60,
    backgroundColor: '#F3F3F3',
    fontFamily: 'Outfit-Bold',
    fontWeight: '700',
    fontSize: 15,
    borderRadius: 15,
    marginBottom: 12,
    paddingLeft: 20,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {width: -2, height: 4},
    shadowRadius: 3,
    elevation: 3,
  },
  forgotPasswort: {
    textAlign: 'right',
    color: '#2D2626',
    fontFamily: 'Outfit-Bold',
    fontWeight: '700',
    fontSize: 15,
  },
  inputContainer: {
    marginHorizontal: 20,
  },
  button: {
    marginTop: 40,
    backgroundColor: '#F89AEE',
    height: 60,
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 22,
  },
  iconsContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ECE9EC',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7,
  },
  iconImage: {width: 30, height: 30},
  socialIconsRow: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
  },
});

export default App;

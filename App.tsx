import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {GOOGLE_ICON, FB_ICON, APPLE_ICON} from './constatnts';
import Icon from './components/Icon';
import Input from './components/Input';

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
          <Input placeholder="Username , Email & Phone Number" />
          <Input placeholder="Password" />
          <Text style={styles.forgotPasswort}>Forgot Password ?</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <View style={styles.socialIconsRow}>
          <Icon url={GOOGLE_ICON} />
          <Icon url={FB_ICON} />
          <Icon url={APPLE_ICON} />
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

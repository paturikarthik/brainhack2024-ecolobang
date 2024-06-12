import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import singpasslogo from '../assets/login/singpass_logo.png';
import google from '../assets/login/google.png';
import ecolobang from '../assets/login/ecolobang.png';
import lightbulb from '../assets/login/lightbulb.png';

const LoginScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const handleLogin = () => {
    // Handle login logic here, then navigate to the Home screen
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <Image source={lightbulb} style={styles.lightbulb} />
      <Text style={styles.funfact}>
        Did you know that LED bulbs use 60 to 90 percent less energy than
        regular incandescent lightbulbs
      </Text>
      <Text style={styles.title}>Welcome Back</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Image source={google} style={styles.icon} />
          <Text style={styles.text}>Sign in with Google</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.text}>Log in with</Text>
          <Image source={singpasslogo} style={styles.icon} />
        </Pressable>
      </View>
      <Image source={ecolobang} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    paddingHorizontal: 32,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 10,
    width: '70%',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginRight: 10,
  },
  icon: {
    resizeMode: 'contain',
    width: '30%',
    height: '100%',
    marginTop: 7,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust as needed
    height: 100, // Adjust as needed
    resizeMode: 'contain',
  },
  lightbulb: {
    width: 300, // Adjust as needed
    height: 300, // Adjust as needed
    resizeMode: 'contain',
  },
  funfact: {
    textAlign: 'center',
    fontSize: 12,
    width: '70%',
    marginBottom: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    opacity: 0.8,
  },
});

export default LoginScreen;

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import ImageScreen from '../image/background.jpg';
import Button from '../Components/button';


export default function Home({ navigation }) {

  const redirectLogin = () => {
    navigation.navigate('Login');
  };

  const redirectRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={ImageScreen}
        resizeMode="cover"
        style={styles.image}
      >
        <Image
        style={styles.logo}
        source={require('../image/logo.png')}
        />
        <Button onPress={redirectLogin} title="Login" disabled={false}/>

        <Button onPress={redirectRegister} title="Register" disabled={false}/>
        <Text style={styles.text}>
          Are not registered, click here!
        </Text>

        <StatusBar style="auto" />

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: '10vh',
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

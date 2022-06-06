import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
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
        <Text style={styles.text}>
          Are not registered, click here!
        </Text>
        <Button onPress={redirectLogin} title="Login" disabled={false}/>

        <Button onPress={redirectRegister} title="Register" disabled={false}/>

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
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
  },
});

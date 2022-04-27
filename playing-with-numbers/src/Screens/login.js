import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, TextInput, View, Button } from 'react-native';
import ImageScreen from '../image/background.jpg';


export default function Login({ navigation }) {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    navigation.navigate('Game');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={ImageScreen}
        resizeMode="cover"
        style={styles.image}
      >
        <TextInput
          style={styles.input}
          onChangeText={setNickname}
          placeholder="NickName"
          value={nickname}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          placeholder="Password"
          value={password}
        />
        <Button
          style={styles.button}
          color='skyblue'
          onPress={handleClick}
          title="Login"
          accessibilityLabel="Learn more about this purple button"
        />
        <StatusBar style="auto" />

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'skyblue',
    backgroundColor: 'black',
    color: 'white',
    padding: 30,
    margin: 40,
    textAlign: 'center',
  },
});

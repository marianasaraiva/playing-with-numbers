import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, TextInput, View } from 'react-native';
import ImageScreen from '../image/background.jpg';
import Button from '../Components/button';
import { fetchAPIPost } from '../services/fetchAPI';
import Context from '../context/Context';

export default function Login({ navigation }) {
  const { setUser, setToken } = useContext(Context);
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async () => {
    const data = {
      nickname,
      password,
    };

    const loggedUSer = await fetchAPIPost('post', 'http://localhost:3001/login', data);
    setToken(loggedUSer.token);
    setUser(loggedUSer.user);
    navigation.navigate('Game');
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
          source={require('../image/login.png')}
        />
        <TextInput
          style={styles.input}
          onChangeText={setNickname}
          placeholder="NickName"
          value={nickname}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={setPassword}
          placeholder="Password"
          value={password}
        />
        <Button onPress={handleClick} title="Login" disabled={false} />

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
    backgroundColor: 'white',
    borderRadius: 4,
    color: 'black',
    marginBottom: 36,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginHorizontal: 70,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 21,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 110,
    marginVertical: 50,
  }
});

import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, TextInput, View, Picker, Text } from 'react-native';
import ImageScreen from '../image/background.jpg';
import Button from '../Components/button';
import { fetchAPIPost, fetchAPIGet } from '../services/fetchAPI';

export default function Register({ navigation }) {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('Coelhinha');
  const [avatars, setAvatars] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(async () => {
    const { data, error } = await fetchAPIGet('get', 'http://nucbox:3001/avatar');

    if (error) {
      setErrorMessage(error);
    } else {
      setAvatars(data);
    }
  }, []);

  useEffect(() => {
    setErrorMessage('');
  }, [nickname, password]);

  const handleClick = async () => {
    const userData = {
      nickname,
      password,
      avatarId: avatars.find((avatar) => avatar.name === selectedAvatar).id,
    };

    const { error } = await fetchAPIPost('post', 'http://nucbox:3001/user', userData);

    if (error) {
      setErrorMessage(error);
    } else {
    navigation.navigate('Login');
    }
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
          source={require('../image/register.png')}
        />

      <TextInput
          style={styles.input}
          onChangeText={setNickname}
          placeholder="NickName"
          value={nickname}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={setPassword}
          placeholder="Password"
          value={password}
        />
        <Picker
          selectedValue={selectedAvatar}
          style={styles.select}
          onValueChange={(avatar) => setSelectedAvatar(avatar)}
        >
          {
            avatars.length !== 0
              ? avatars.map(({ name, id }) => (
                <Picker.Item key={id} label={name} value={name} /> ))
              : null
          }
        </Picker>
        {
          errorMessage !== '' && <Text style={styles.error}>{errorMessage}</Text>
        }
        <Button onPress={handleClick} title="Register" disabled={ errorMessage !== '' }/>
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
  },
  select: {
    height: 50,
    paddingHorizontal: 32,
    marginHorizontal: 70,
    marginBottom: 36,
    borderRadius: 4,
    borderColor: 'skyblue',
    textAlign: 'center',
    fontSize: 18,
  },
});

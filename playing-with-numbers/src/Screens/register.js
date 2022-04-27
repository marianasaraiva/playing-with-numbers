import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View } from 'react-native';
import Button from '../Components/button';

export default function Register({ navigation }) {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleClick = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
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
        <TextInput
          style={styles.input}
          onChangeText={setAvatar}
          placeholder="Avatar"
          value={avatar}
        />
        <Button onPress={handleClick} title="Register"/>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

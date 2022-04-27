import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Pressable } from 'react-native';
import Button from '../Components/button';


export default function Login({ navigation }) {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    navigation.navigate('Game');
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
        style={styles.input}
        secureTextEntry={true}
        onChangeText={setPassword}
        placeholder="Password"
        value={password}
      />
      <Button onPress={handleClick} title="Login"/>

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

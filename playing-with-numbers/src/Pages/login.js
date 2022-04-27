import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login({ navigation }) {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    navigation.navigate('/game');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setNickname}
        value={nickname}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      <Button
        style={styles.button}
        onPress={ handleClick }
        title="Login"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'skyblue',
    margin: 20,
  },
  button: {
    color: 'skyblue',
  },
});

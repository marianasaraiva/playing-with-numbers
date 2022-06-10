import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  const { onPress, title = 'Save', disabled } = props;
  return (
    <Pressable style={styles.button} onPress={onPress} disabled={ disabled }>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 36,
    marginHorizontal: 70,
    borderColor: 'skyblue',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});

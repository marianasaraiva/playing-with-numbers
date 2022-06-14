import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import Context from '../context/Context';

export default function Header() {
  const { user } = useContext(Context);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: user.avatar.url,
        }}
        />
        <Text style={styles.text}>{`Olá ${user.nickname}! Vamos brincar?`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 80,
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  image: {
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
  },
});

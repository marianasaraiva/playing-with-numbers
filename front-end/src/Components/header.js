import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import Context from '../context/Context';

export default function Header() {
  const { user } = useContext(Context);

  return (
    <View>
      <Text>{`Olá ${user.nickname}! Vamos brincar?`}</Text>
      <Image
        style={styles.image}
        source={{
          uri: user.avatar.url,
        }}
        />
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
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});

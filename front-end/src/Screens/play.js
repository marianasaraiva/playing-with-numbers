import React, { useContext } from 'react'
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import Context from '../context/Context';
import ImageScreen from '../image/background.jpg';
import OperationTable from '../Components/operation';

export default function Play({ navigation }) {
  const { game } = useContext(Context);
  return (
    <View style={styles.container}>
       <ImageBackground
        source={ImageScreen}
        resizeMode="cover"
        style={styles.image}
      >
        <Image
          style={styles.logo}
          source={require(`../image/${game}.png`)}
        />
        <OperationTable navigation={ navigation }/>
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: '10vh',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

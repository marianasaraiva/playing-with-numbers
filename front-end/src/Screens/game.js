import React, { useState, useEffect, useContext } from 'react';
import Context from '../context/Context';
import Button from '../Components/button';
import { Image, ImageBackground, StyleSheet, View, Picker } from 'react-native';
import ImageScreen from '../image/background.jpg';
import { fetchAPIGet } from '../services/fetchAPI';
import Header from '../Components/header';

export default function Game({ navigation }) {
  const { setGame } = useContext(Context);
  const [selectedGame, setSelectedGame] = useState('Sum');
  const [games, setGames] = useState([]);

  const fetchAPIGame = async () => {
    const result = await fetchAPIGet('get', 'http://localhost:3001/game');
    setGames(result);
  }

  useEffect(() => {
    fetchAPIGame();
  }, [])

  const handlePlayClick = () => {
    setGame(selectedGame);
    navigation.navigate('Play');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={ImageScreen}
        resizeMode="cover"
        style={styles.image}
      >
        <Header />
        <Image
          style={styles.logo}
          source={require('../image/game.png')}
        />
        <Picker
          selectedValue={selectedGame}
          style={styles.select}
          onValueChange={(game) => setSelectedGame(game)}
        >
          {
            games.length !== 0
              ? games.map(({ name, id }) => (
                <Picker.Item key={id} label={name} value={name} /> ))
              : null
          }
        </Picker>
        <Button onPress={ handlePlayClick } title="Jogar" disabled={false}/>
        <Button onPress={ () => navigation.navigate('Ranking') } title="Ranking" disabled={false}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
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

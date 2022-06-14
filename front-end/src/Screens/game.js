import React, { useState, useEffect, useContext } from 'react';
import Context from '../context/Context';
import Button from '../Components/button';
import { Image, ImageBackground, StyleSheet, View, Picker, Text } from 'react-native';
import ImageScreen from '../image/background.jpg';
import { fetchAPIGet } from '../services/fetchAPI';
import Header from '../Components/header';

export default function Game({ navigation }) {
  const { setGame } = useContext(Context);
  const [selectedGame, setSelectedGame] = useState('Sum');
  const [games, setGames] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchAPIGame = async () => {
    const { data, error } = await fetchAPIGet('get', 'http://nucbox:3001/game');

    if (error) {
      setErrorMessage(error);
    } else {
      setGames(data);
    }
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
        {
          errorMessage !== '' && <Text style={styles.error}>{errorMessage}</Text>
        }
        <Button onPress={ handlePlayClick } title="Jogar" disabled={false}/>
        <Button onPress={ () => navigation.navigate('Ranking') } title="Ranking" disabled={false}/>
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: '10vh',
  },
  input: {
    borderWidth: 2,
    borderColor: 'skyblue',
    backgroundColor: 'white',
    borderRadius: 4,
    color: 'black',
    paddingVertical: 12,
    width: '70%',
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
  },
  select: {
    height: 50,
    width: '70%',
    borderRadius: 4,
    borderColor: 'skyblue',
    textAlign: 'center',
    fontSize: 18,
  },
  error: {
    backgroundColor: 'rgba(252, 252, 252, 0.4)',
    borderRadius: 4,
    color: 'red',
    textAlign: 'center',
    width: '70%',
    fontSize: 16,
    padding: '2vh',
  },
});

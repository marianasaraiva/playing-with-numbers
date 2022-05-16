import React, { useState, useEffect, useContext } from 'react';
import Context from '../context/Context';
import Button from '../Components/button';
import { View, Text, Picker } from 'react-native';
import { fetchAPIGet } from '../services/fetchAPI';

export default function Game() {
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

  

  return (
    <View>
      <Text>Game de Matemática</Text>
      <Picker
        selectedValue={selectedGame}
        style={{ height: 50, width: 150 }}
        onValueChange={(game) => setSelectedGame(game)}
      >
        {
          games.length !== 0
            ? games.map(({ name, id }) => (
              <Picker.Item key={id} label={name} value={name} /> ))
            : null
        }
      </Picker>
      <Button onPress={ () => setGame(selectedGame) } title="Jogar"/>
      {/* <Button onPress={} title="Ranking"/>
      <Button onPress={} title="Level"/> */}
    </View>
  );
}

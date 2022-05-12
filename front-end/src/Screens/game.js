import React, { useState, useEffect } from 'react';
import { View, Text, Picker } from 'react-native';
import { fetchAPIGet } from '../services/fetchAPI';

export default function Game() {
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
    </View>
  );
}

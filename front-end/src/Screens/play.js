import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import Context from '../context/Context';

export default function Play() {
  const { game } = useContext(Context);
  return (
    <View>
      <Text>
        {`Play ${game}`}
      </Text>
    </View>
  )
}

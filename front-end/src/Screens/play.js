import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import Context from '../context/Context';
import OperationTable from '../Components/operation';

export default function Play({ navigation }) {
  const { game } = useContext(Context);
  return (
    <View>
      <Text>
        {`Play ${game}`}
      </Text>
      <OperationTable navigation={ navigation }/>
    </View>
  )
}
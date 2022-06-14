import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import Button from './button';
import Context from '../context/Context';

export default function OperationTable({ navigation }) {
  const { game } = useContext(Context);
  const [data, setData] = useState([]);
  const [response, setResponse] = useState([]);
  const [userResponse, setUserResponse] = useState(new Array(10).fill(''));
  const [showResult, setShowResult] = useState(false);
  const [finishMessage, setFinishMessage] = useState('');

  const getRandomNumber = () => { 
    return Math.floor(Math.random() * (10 - 1)) + 1;
  }

  const getResult = (num, index, operation) => {
    switch (operation) {
      case '+':
        return num + index;    
      case '-':
        return num - index;    
      case '/':
        return num / index;    
      default:
        return num * index;    
    }
  }
  
  const calculate = (num) => {
    const result = [];
    const row = [];
    const operations = {
      Sum: '+',
      Substraction: '-',
      Division: '/',
      Multiplication: '*',
    };

    for (let x = 1; x <= 10; x += 1) {
      row.push(`${x} ${operations[game]} ${num} =`);
      setData(row);
      result.push(getResult(num, x, operations[game]));
      setResponse(result);
    };
  };
  
  useEffect(() => { calculate(getRandomNumber()) }, []);
  
  const handleOnChange = (value, position) => {
    const updatedCheckedState = userResponse.map((item, index) =>
      index === position ? Number(value) : item
    );
    setUserResponse(updatedCheckedState);
  };

  const onClick = () => {
    const checkAnswer = response.every((answer, index) => answer === userResponse[index]);
    setShowResult(true);
    checkAnswer
      ? setFinishMessage('Você ganhou!!!')
      : setFinishMessage('Vamos treinar um pouco mais?');
  };

  const nextNumber = () => navigation.navigate('Game');

  return (
    <View style={styles.container}>
      {
        showResult 
        ?
          <Text style={styles.view}>{ finishMessage }</Text>
        :
          <View style={styles.view}>
            { 
              response.length === 10 && data.map((row, index) => (
                <View style={styles.table} key={ index }>
                  <Text style={styles.text}>{ row }</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={ (target) => handleOnChange(target, index) }
                    placeholder="?"
                    value={ userResponse[index] }
                    name={ index }
                  /> 
                </View>)
              )
            }
          </View>
      }
      <Button
        onPress={ showResult ? nextNumber : onClick }
        title={ showResult ? "Próximo" : "Finalizar" }
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '70%',
  },
  table: {
    backgroundColor: 'rgba(252, 252, 252, 0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    width: '100%',
    fontSize: 20,
    textAlign: 'center'
  },
  input: {
    width: '100%',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 4
  },
  view: {
    // paddingBottom: 40,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold'
  },
});

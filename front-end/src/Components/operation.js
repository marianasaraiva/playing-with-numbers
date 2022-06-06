import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Button from './button';

const tableData = [];

const tableHead = ['Número', 'Operação', 'Número', 'Igual a'];

export default function OperationTable({ navigation }) {
  const [data, setData] = useState({tableHead, tableData});
  const [response, setResponse] = useState([]);
  const [userResponse, setUserResponse] = useState(new Array(10).fill(''));
  const [disabled, setDisabled] = useState(true);
  const [showResult, setShowResult] = useState(false);

  const getRandomNumber = () => { 
    return Math.floor(Math.random() * (10 - 1)) + 1;
  }
  
  const calculate = (num) => {
    const result = [];
    for (let x = 1; x <= 10; x += 1) {
      tableData.push([`${num}`, '*', `${x}`, '=']);
      setData({...data, tableData });
      result.push(num * x);
      setResponse(result);
    };
  };
  
  useEffect(() => { calculate(getRandomNumber()) }, []);
  
  const handleOnChange = (value, position) => {
    const updatedCheckedState = userResponse.map((item, index) =>
      index === position ? Number(value) : item
    );
    setUserResponse(updatedCheckedState);
    const checkAnswer = userResponse
      .map((answer) => answer !== '')
      .every((answer) => answer === true);
    checkAnswer && setDisabled(false);
  };

  const onClick = () => {
    const checkAnswer = response
    .map((answer, index) => answer === userResponse[index])
    .every((answer) => answer === true);
    checkAnswer && setShowResult(true)
  };

  const nextNumber = () => navigation.navigate('Game');

  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={data.tableHead} style={styles.head} textStyle={styles.text}/>
        <Rows data={data.tableData} textStyle={styles.text}/>
      </Table>
      {
        showResult 
        ?
          <Text>Você ganhou!!! :palmas:</Text>
        :
          <View>
            { 
              response.length === 10 && response.map((_row, index) => (
                <TextInput
                  key={ index }
                  onChangeText={ (target) => handleOnChange(target, index) }
                  placeholder="?"
                  value={ userResponse[index] }
                  name={ index }
                /> 
              ))
            }
          </View>
      }
      <Button
        onPress={ showResult ? nextNumber : onClick }
        title={ showResult ? "Próximo" : "Finalizar" }
        disabled={ disabled }
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

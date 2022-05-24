import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const tableData = [];

const tableHead = ['Número', 'Operação', 'Número', 'Igual a'];

export default function OperationTable() {
  const [data, setData] = useState({tableHead, tableData});
  // const [randomNumber, setRandom] = useState(1);
  const [response, setResponse] = useState([]);
  const [userResponse, setUserResponse] = useState('');

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
  
  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={data.tableHead} style={styles.head} textStyle={styles.text}/>
        <Rows data={data.tableData} textStyle={styles.text}/>
      </Table>
      { 
        response.length === 10 && response.map((row, index) => (
          <TextInput
            key={index}
            onChangeText={setUserResponse}
            placeholder="?"
            value={userResponse}
            name={index}
            /> 
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

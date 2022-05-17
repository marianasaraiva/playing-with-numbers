import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const tableData = [
  ['1', 'x', '2', '=', ''],
  ['2', 'x', '2', '=', ''],
  ['3', 'x', '2', '=', ''],
  ['4', 'x', '2', '=', ''],
  ['5', 'x', '2', '=', ''],
  ['6', 'x', '2', '=', ''],
  ['7', 'x', '2', '=', ''],
  ['8', 'x', '2', '=', ''],
  ['9', 'x', '2', '=', ''],
  ['10', 'x', '2', '=', ''],
];

const tableHead = ['Head', 'Head2', 'Head3', 'Head4', 'Head5'];

export default function OperationTable() {
  const [data, setData] = useState({tableHead, tableData});

  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={data.tableHead} style={styles.head} textStyle={styles.text}/>
        <Rows data={data.tableData} textStyle={styles.text}/>
      </Table>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

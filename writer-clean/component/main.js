import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import addTodo from '../model/adTodo';
import * as SQLite from 'expo-sqlite';

export default function List() {
  const [text, setText] = useState('');
  const [db, setDb] = useState(null);

  useEffect(() => {
    async function initDB() {
      const database = await SQLite.openDatabaseAsync('todo.db');
      setDb(database);
      console.log("DB opened");
    }

    initDB();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Todo activity:</Text>

      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        multiline
        placeholder="Write your todo..."
      />

      <Button
        title="Add"
        onPress={() => addTodo(db, text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    textAlignVertical: 'top',
  },
});

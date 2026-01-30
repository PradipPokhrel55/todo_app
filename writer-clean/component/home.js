import React from 'react';
import { View, StyleSheet } from 'react-native';
import Calendar from './calender';
import List from './main';
import { Button } from 'react-native-paper';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Button 
        mode="contained"
        onPress={() => navigation.navigate("Personal")}
      >
        Personal
      </Button>

      <Button 
        mode="contained"
        onPress={() => navigation.navigate("Work")}
        style={{ marginTop: 10 }}
      >
        Work
      </Button>

      <List />
      <Calendar completedDates={[]} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

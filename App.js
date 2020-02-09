import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import store from './src/services/index.js';
import Header from './src/Components/Header.js';
import DealsList from './src/Components/DealsList.js';
import TodoInput from './src/Components/TodoInput.js';

export default function App() {
  return (
    <Provider store={store} >
      <View style={styles.container}>
        <Header />
        <TodoInput />
        <DealsList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

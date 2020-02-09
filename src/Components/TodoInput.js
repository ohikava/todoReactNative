import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {addTodo} from '../services/todo/actions.js';
import {useDispatch} from 'react-redux';

const TodoInput = () => {
  const [todo, typeTodo] = useState('');
  const dispacth = useDispatch();
  const handleSubmit = (e) => {
    dispacth(addTodo({
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      isCompleted: false,
      body: todo
    }));

    typeTodo('');
  };
  return <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder="What to do?"
      onChangeText={(text) => typeTodo(text)}
      value={todo}
      onSubmitEditing={handleSubmit}
       />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center'
  },
  input: {
    fontSize: 30,
    flex: 1,
  }
})
export default TodoInput;

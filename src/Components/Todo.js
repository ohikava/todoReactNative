import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {removeTodo, completeTodo} from '../services/todo/actions.js';
import {useDispatch} from 'react-redux';

const Todo = ({todo}) => {
  const dispatch = useDispatch();


  return <View style={todo.isCompleted ? styles.todo : styles.completed} >
    <TouchableOpacity onPress={() => {
      dispatch(completeTodo(todo.id));
    }}><Text style={styles.btnTxt}>✓</Text></TouchableOpacity>
    <Text style={styles.item}>{todo.body}</Text>
    <TouchableOpacity onPress={() => {
      dispatch(removeTodo(todo.id));
    }}><Text style={styles.btnTxt}>✕</Text></TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    width: 320,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  completed: {
    flexDirection: 'row',
    width: 320,
    justifyContent: 'space-between',
    marginBottom: 20,
    opacity: 0.1
  },
  item: {
    fontSize: 30,
    opacity: 0.5,
  },
  btnTxt: {
    color: '#f4bc16',
    fontSize: 26
  }
})
export default Todo;

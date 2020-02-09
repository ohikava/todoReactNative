import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Todo from './Todo.js';
import {FILTERS} from '../services/filters/actionsTypes.js';

const DealsList = () => {
  const filter = useSelector(s => s.filterReducer.filter);
  const todos = useSelector(s => s.todoReducer.todos);
  const filteredTodos = todos.filter(i => {
    switch(filter) {
      case FILTERS.ALL:
        return i;
      case FILTERS.COMPLETED:
        return !i.isCompleted;
      case FILTERS.AVAILABLE:
        return !!i.isCompleted;
      default:
        return i;
    }
  });
  console.log(todos);
  const createTodosList = <FlatList data={filteredTodos} renderItem={({item}) => <Todo todo={item} />} styles={styles.list}/>

  return <View style={styles.container}>
    {todos.length ? createTodosList : <Text style={styles.emptyStyle}>Deals list</Text>}
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
  emptyStyle: {
    opacity: 0.1,
    fontSize: 20
  },
  list: {

  }
})
export default DealsList;

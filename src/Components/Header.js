import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {changeFilter} from '../services/filters/actions.js';
import {FILTERS} from '../services/filters/actionsTypes.js';
import {useDispatch} from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  return <View style={styles.container}>
      <Text style={styles.logo}>TODO</Text>
      <View style={styles.filtersContainer}>
        <TouchableOpacity style={styles.filtersBtn} onPress={() => {
          dispatch(changeFilter(FILTERS.ALL));
        }}><Text style={styles.filtersText}>ALL</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filtersBtn} onPress={() => {
          dispatch(changeFilter(FILTERS.COMPLETED));
        }}><Text style={styles.filtersText}>COMPLETED</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filtersBtn} onPress={() => {
          dispatch(changeFilter(FILTERS.AVAILABLE));
        }}><Text style={styles.filtersText}>AVAILABLE</Text></TouchableOpacity>
      </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: "space-between",
    flex: 2,
    width: "100%",
    backgroundColor:'#f4bc16',
    opacity: 0.5,
    flexDirection: "row"
  },
  logo: {
    color: "#fff",
    fontSize: 30
  },
  filtersContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  filtersBtn: {
    margin: 5,
  },
  filtersText: {
    opacity: 0.5
  }
});

export default Header;

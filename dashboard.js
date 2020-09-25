import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Task from './tasks';

export default class dashboard extends React.Component {
  render () {
    return (
  <View style={styles.background}>
  <Text style={styles.Welcome}>Tasks to Complete</Text>
 
  <Task taskName="Cooking"/>
  <Task taskName="Washing"/>
  <Task taskName="Ironing"/>
  <Task taskName="Cleaning"/>
  </View>
  )
  }
}

const styles = StyleSheet.create({
  Welcome : {
    fontSize : 20,
    fontWeight: "bold",
    marginBottom : 50
  },

 background : {
     flex : 1,
     justifyContent : "center",
     alignItems: "center"
 }

})

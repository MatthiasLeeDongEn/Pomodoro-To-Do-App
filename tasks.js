import React, { useState } from 'react'
import { CheckBox, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';


const Task = (props) => {

   const [isSelected, setSelection] = useState(false);

  return (
  <View style={styles.containerStyle}>
      <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
       />
      <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.taskStyle}>   {props.taskName}
      </Text>
      </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  containerStyle : {
    flexDirection: 'row',
    flexWrap:'wrap',
    backgroundColor :'white',
    width : '100%',
    marginTop: 2,
    padding: 20,
    },

   checkbox : {
     alignSelf: 'center',
   },

  taskStyle : {
    fontSize: 20,
    flexDirection: 'row',
},
})

export default Task
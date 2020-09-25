import React from 'react'
import { CheckBox, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import CountDown from 'react-native-countdown-component';

class FocusScreen extends React.Component {
  static navigationOptions = {
    title: 'Focus',
  };
  
  render () {
    return ( 
    <View style={styles.Timer}>
    <CountDown
        until={60 * 25 + 0}
        size={30}
        onFinish={() => alert('Finished')}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'Min', s: 'Sec'}}
      />
      <Text style={styles.tasks}> Keep it up! </Text>
    </View>

  )
  }
}

const styles = StyleSheet.create({
  Timer : {
     flex : 1,
     justifyContent : "center",
     alignItems: "center"
},

tasks : {
  fontWeight: 'bold'
}
})

export default FocusScreen;
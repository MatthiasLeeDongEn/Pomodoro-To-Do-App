import React from 'react'
import {
  View,
  Text, 
  StyleSheet, 
  TextInput, 
  FlatList, 
  Button,
  TouchableOpacity
  } from 'react-native'
import Task from './tasks';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FocusScreen from './focusScreen';

class DashboardScreen extends React.Component {
  static navigationOptions = {
    title: 'Dashboard',
  };

  state = {
    defaultTasks: [
      'Iron the clothes', 
      'Tend to the garden', 
      'Go for a swim', 
      'Jogging'
      ],
    newTask: ''
  }  
  renderItem = ({item}) => {
  return (
    <View>
    <Task 
          taskName={item} 
          onPress={() => this.props.navigation.navigate('Focus')}
          />
    </View>
  )
}
  render() {
    return (
      <View style={styles.mainContainer}>
        <FlatList
        data = {this.state.defaultTasks}
        renderItem = {this.renderItem}
        />
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => this.setState({ newTask: text })}
          value={this.state.newTask}
          placeholder = 'Enter Task'
        />
        <TouchableOpacity 
          onPress={() => {
            this.setState({ 
              defaultTasks: [...this.state.defaultTasks, this.state.newTask],
              newTask: ''
            })
          }}
          style = {styles.buttonStyle}
          > 
          <Text style={styles.buttonText} >Add Task</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  textInputStyle : { 
    textAlign: 'center',
    height: '5%',
    width: '90%',
    borderWidth : 1,
    borderColor:'#0288d1',
    backgroundColor:'white',
    borderRadius: 7,
    marginTop: 10,
    alignSelf: 'center'
  },
  buttonStyle : {
    textAlign: 'center',
    height: '5%',
    width: '90%',
    backgroundColor:'#0288d1',
    borderRadius: 7,
    marginTop: 10,
    padding: '3%',
    alignSelf: 'center'
  },
  buttonText : {
    textAlign : 'center',
    color:'#fff'
  },
  mainContainer: {
  flex: 1,
  margin: 2,
  backgroundColor:'grey',
  },
})

const stackNav = createStackNavigator(
  {
    Focus: FocusScreen,
    Dashboard: DashboardScreen,
  },
  {
    initialRouteName: 'Dashboard',
  }
);

const AppContainer = createAppContainer(stackNav);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;

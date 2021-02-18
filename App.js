import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login';
import DetailsScreen from './DetailsScreen';
import TasksScreen from './Tasks';
import bg from './assets/bg.jpeg';
import logo from './assets/logo.jpeg';



const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
            headerTintColor: '#fff',
            headerStyle: {
              height: 60, // Specify the height of your custom header
              backgroundColor: '#233554',
            }
          }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              headerTintColor: '#fff',
              headerStyle: {
                height: 60, // Specify the height of your custom header
                backgroundColor: '#233554',
              }
            }}
          />
          <Stack.Screen
            name="Tasks"
            component={TasksScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;



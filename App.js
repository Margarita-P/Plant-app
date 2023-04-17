
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  React  from 'react';
import  FirstPage  from './FirstPage';
import  SecondPage  from './SecondPage';
import WelcomeScreen from './WelcomeScreen';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="FirstPage" component={FirstPage} />
      <Stack.Screen name="SecondPage" component={SecondPage} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}


import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './src/pages/main/main-page';
import ResultPage from './src/pages/result/result-page';
import { AppBar } from './src/component/app-bar';

const Stack = createStackNavigator();

export const App = () => {

  const headerStyle = {
    headerTintColor: 'red',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: 'black',
      fontSize: 18
    }
  }


  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{
          header: props => <AppBar/>
      }}>
        <Stack.Screen name="Main" component={MainPage}/>
        <Stack.Screen name="Result" component={ResultPage} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

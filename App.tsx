
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageView from './src/screens/imageView';
import ImagesList from './src/screens/imagesList';
const Stack = createStackNavigator()

function App(): React.JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        options={{ headerShown: false }}
        name='imageList'
        component={ImagesList}
        
        />
        <Stack.Screen
        options={{ headerShown: false }}
        name='imageView'
        component={ImageView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

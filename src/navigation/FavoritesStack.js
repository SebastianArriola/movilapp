import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { screen } from '../utils';
import FavoritesScreen from '../screens/favorites/FavoritesScreen';

const Stack =  createNativeStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator>

        <Stack.Screen
            name={screen.favorites.favs}
            component={FavoritesScreen}
            options={{title:"Tus favoritos"}}
        />

    </Stack.Navigator>
  )
}

export default FavoritesStack
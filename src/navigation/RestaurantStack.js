import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { screen } from '../utils';
import AddRestaurantScreen from '../screens/restaurants/AddRestaurantScreen';
import RestaurantScreen from '../screens/restaurants/RestaurantScreen';

const Stack =  createNativeStackNavigator();

const RestaurantStack = () => {
  return (
    
    <Stack.Navigator>

        <Stack.Screen
            name={screen.restaurant.restaurant}
            component={RestaurantScreen}
            options={{title: "Restaurantes"}}
        />
        <Stack.Screen
            name={screen.restaurant.addRestaurants}
            component={AddRestaurantScreen}
            options={{title: "Nuevo restaurante"}}
        />

    </Stack.Navigator>

  )
}

export default RestaurantStack
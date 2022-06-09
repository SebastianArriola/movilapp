import { Button } from '@rneui/base'
import React from 'react'
import { Text, View } from 'react-native'
import { screen } from '../../utils';

const RestaurantScreen = (props) => {
  
  const {navigation} = props;

  const goToAddRestaurant = () =>{

      navigation.navigate(screen.restaurant.tab, {screen: screen.restaurant.addRestaurants})

  }

  return (
    <Button title="Crear restaurante" onPress={goToAddRestaurant}/>
  )
}

export default RestaurantScreen
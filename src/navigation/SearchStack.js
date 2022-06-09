import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { screen } from '../utils'
import SearchScreen from '../screens/search/SearchScreen'

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>

        <Stack.Screen
            name={screen.search.searchV}
            component={SearchScreen}
            options={{title:"Buscar"}}
        />

    </Stack.Navigator>
  )
}

export default SearchStack
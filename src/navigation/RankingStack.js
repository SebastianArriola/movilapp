import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { screen } from '../utils'
import RankingScreen from '../screens/ranking/RankingScreen'

const Stack = createNativeStackNavigator();

const RankingStack = () => {
  return (
    <Stack.Navigator>

        <Stack.Screen
            name={screen.ranking.rank}
            component={RankingScreen}
            options={{title:"Ranking"}}
        />

    </Stack.Navigator>
  )
}

export default RankingStack
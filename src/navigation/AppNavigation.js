import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/base';
import { screen } from '../utils';
import RestaurantStack from './RestaurantStack';
import AccountStack from './AccountStack';
import FavoritesStack from './FavoritesStack';
import RankingStack from './RankingStack';
import SearchStack from './SearchStack';
import AccountScreen from '../screens/account/AccountScreen';

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => selectOption(route, color, size)

    })}>

        <Tab.Screen name = {screen.ranking.tab} component={RankingStack} options={{title: "Ranking"}}/>
        <Tab.Screen name = {screen.favorites.tab} component={FavoritesStack} options={{title: "Favoritos"}}/>
        <Tab.Screen name = {screen.restaurant.tab} component={RestaurantStack} options={{title: "Restaurantes"}}/>
        <Tab.Screen name = {screen.search.tab} component={SearchStack} options={{title: "Buscar"}}/>
        <Tab.Screen name = {screen.account.tab} component={AccountStack} options={{title: "Cuenta"}}/>

    </Tab.Navigator>
  )
}

const selectOption = (route, color, size) =>{

    let iconName;

    route.name === screen.restaurant.tab && (iconName = "silverware-fork-knife")
    route.name === screen.favorites.tab && (iconName = "heart-outline")
    route.name === screen.ranking.tab && (iconName = "star-outline")
    route.name === screen.search.tab && (iconName = "magnify")
    route.name === screen.account.tab && (iconName = "account-circle-outline")

    return <Icon type="material-community" name={iconName} color={color} size={size}/>

}

export default AppNavigation
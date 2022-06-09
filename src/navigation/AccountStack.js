import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { screen } from '../utils';
import AccountScreen from '../screens/account/AccountScreen';
import LoginScreen from '../screens/account/LoginScreen';
import RegisterScreen from '../screens/account/RegisterScreen';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={AccountScreen}
        options={{ title: "Cuenta" }}
      />
      <Stack.Screen
        name={screen.account.login}
        component={LoginScreen}
        options={{title: "Iniciar sesión"}}
      />
      <Stack.Screen
        name={screen.account.register}
        component={RegisterScreen}
        options={{title: "Registrarse"}}
      />
    </Stack.Navigator>
  )
}

export default AccountStack

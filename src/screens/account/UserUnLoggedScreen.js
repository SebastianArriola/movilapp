import { View } from 'react-native'
import { Image, Text, Button } from '@rneui/base'
import React from 'react'
import { stylesUnlogged } from './styles/stylesUserUnloggedScreen'
import { useNavigation } from '@react-navigation/native'
import { screen } from '../../utils'

const UserUnLoggedScreen = () => {

  const navigator = useNavigation();

  const goToLogin = () =>{

    navigator.navigate(screen.account.login)

  }

  return (
    <View style={stylesUnlogged.content}>
      <Image source={require('../../../assets/img/cuentas.png')} style={stylesUnlogged.image}/>
      <Text style={stylesUnlogged.text}>Crea o inicia sesión en nuestra aplicacion    Estamos Cubiertos</Text>
      <View style={stylesUnlogged.boxButton}>

            <Button onPress={goToLogin} title={"Ver perfil"} buttonStyle={stylesUnlogged.button}/>

      </View>
    </View>
  )
}

export default UserUnLoggedScreen
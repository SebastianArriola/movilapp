import { View} from 'react-native'
import { Button, Text, Image, Input, Icon } from '@rneui/base'
import { stylesLogin } from './styles/stylesLoginScreen'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { screen } from '../../utils'

const LoginScreen = () => {

  const navigation = useNavigation();

  const navToApp = () =>{

    navigation.navigate(screen.account.register);

  }

  return (
    <View style={stylesLogin.content}>
      <Image source={require('../../../assets/img/algaboIconPicker.png')} style={stylesLogin.image}/>
      <Input
      placeholder='Usuario'
      inputContainerStyle={stylesLogin.input}
      />
      <Input
      placeholder='Contraseña'
      inputContainerStyle={stylesLogin.input}
      secureTextEntry={true}
      />
      <View style={stylesLogin.boxButtonLogin}>
      <Button title="INICIAR SESIÓN" onPress={()=>{}}buttonStyle={stylesLogin.button} titleStyle={stylesLogin.textButton}/>
      </View>
      <View style={stylesLogin.boxButtonRegister}>
      <Button title="REGISTRARSE" onPress={navToApp}buttonStyle={stylesLogin.button} titleStyle={stylesLogin.textButton}/>
      </View>
    </View>
  )
}

export default LoginScreen
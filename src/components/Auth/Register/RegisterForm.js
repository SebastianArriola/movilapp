import { View, Text } from 'react-native'
import React from 'react'
import { stylesRegisterForm } from './styleRegisterForm'
import { Button, Input } from '@rneui/base'
import { styles } from '../../../screens/account/styles/stylesUserLoggedScreen'

const RegisterForm = () => {

  return (
    <View style={stylesRegisterForm.content}>

      <Input placeholder='E-mail'/>
      <Input placeholder='Contraseña' secureTextEntry={true}/>
      <Input placeholder='Confirmar contraseña' secureTextEntry={true}/>

      <Button title={"Ingresar"} buttonStyle={stylesRegisterForm.button} titleStyle={stylesRegisterForm.text} onPress={()=>{}}/>

    </View>
  )
}

export default RegisterForm
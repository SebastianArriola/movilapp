import { View } from 'react-native'
import React from 'react'
import { stylesRegister } from './styles/stylesRegisterScreen'
import { Input, Text } from '@rneui/base'
import RegisterForm from '../../components/Auth/Register/RegisterForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const RegisterScreen = () => {
  return (
    <KeyboardAwareScrollView style={stylesRegister.container}>
      <Text style={stylesRegister.text}>REGISTRO</Text>
      <View style={stylesRegister.boxInput}>

        <RegisterForm/>

      </View>
    </KeyboardAwareScrollView>
  )
}

export default RegisterScreen
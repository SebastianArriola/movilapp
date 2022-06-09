import { View} from 'react-native'
import { Button, Text, Image, Input, Icon } from '@rneui/base'
import { stylesLogin } from './styles/stylesLoginScreen'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { screen } from '../../utils'
import LoginForm from '../../components/Auth/Login/LoginForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginScreen = () => {

  const navigation = useNavigation();

  const navToApp = () =>{

    navigation.navigate(screen.account.register);

  }

  return (
    <KeyboardAwareScrollView style={stylesLogin.content}>
      <Image source={require('../../../assets/img/algaboIconPicker.png')} style={stylesLogin.image}/>
      <View style={stylesLogin.boxInput}>

        <LoginForm/>

      </View>
    </KeyboardAwareScrollView>
  )
}

export default LoginScreen
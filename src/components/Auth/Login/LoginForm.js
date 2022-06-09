import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { stylesLoginForm } from './styleLoginForm'
import { Button, Icon, Input } from '@rneui/base'
import { useFormik } from 'formik'
import { initialValuesLogin, validationSchemaLogin } from './Login.data'
import { useNavigation } from '@react-navigation/native'
import { screen } from '../../../utils'

const LoginForm = () => {

  const [showPassword, setShowPassword] = useState(false)

  const navigation = useNavigation();

  const goToRegister = () =>{

    navigation.navigate(screen.account.register)

  }

  const formik = useFormik({

    initialValues: initialValuesLogin(),
    onSubmit: (values)=>{

        console.log(values)

    },
    validationSchema: validationSchemaLogin(),
    validateOnChange: false

  })

  const ref_input2 = useRef();

  const hidenPassword = () => {

    setShowPassword(!showPassword)

  }

  return (
    <View style={stylesLoginForm.content}>
      <Input
      placeholder='Usuario'
      autoFocus={true}
      errorMessage={formik.errors.email}
      inputContainerStyle={stylesLoginForm.input}
      onChangeText={text => formik.setFieldValue("email", text)}
      onSubmitEditing= {() => ref_input2.current.focus()}
      />
      <Input
      placeholder='Contraseña'
      inputContainerStyle={stylesLoginForm.input}
      errorMessage={formik.errors.password}
      secureTextEntry={showPassword ? false : true}
      onChangeText={text => formik.setFieldValue("password", text)}
      rightIcon={
          showPassword ? <Icon name='eye' type='font-awesome' onPress={hidenPassword}/> : <Icon name='eye-slash' type='font-awesome' onPress={hidenPassword}/>
      }
      ref={ref_input2}
      />
      <View style={stylesLoginForm.boxButtonLogin}>
      <Button title="INICIAR SESIÓN" onPress={formik.handleSubmit} buttonStyle={stylesLoginForm.button} titleStyle={stylesLoginForm.textButton} loading={formik.isSubmitting}/>
      </View>
      <View style={stylesLoginForm.boxButtonRegister}>
      <Button title="REGISTRARSE" onPress={goToRegister}buttonStyle={stylesLoginForm.button} titleStyle={stylesLoginForm.textButton}/>
      </View>
    </View>
  )
}

export default LoginForm
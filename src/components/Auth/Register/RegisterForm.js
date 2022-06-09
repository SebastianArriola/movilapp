import { View } from 'react-native'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import { stylesRegisterForm } from './styleRegisterForm'
import { Button, Icon, Input } from '@rneui/base'
import { initialValues, validationSchema } from './Register.data'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { screen } from '../../../utils'
import Toast from 'react-native-toast-message';

const RegisterForm = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)

  const navigation = useNavigation()

  const formik = useFormik({

    initialValues: initialValues(),
    onSubmit: async (formValues) => {

        try {
          
          const auth = getAuth();

          await createUserWithEmailAndPassword(

            auth,
            formValues.email,
            formValues.password

          )
          
          navigation.navigate(screen.account.account)
          Toast.show({

            type: 'success',
            text1: "Usuario registrado y logueado correctamente"

          })

        } catch (error) {
          
          Toast.show({

            type: 'error',
            text1: "Registro incorrecto, intentelo más tarde"

          })

        }

    },
    validationSchema: validationSchema,
    validateOnChange: false

  })

  const changeShowPassword = () => setShowPassword(!showPassword);
  const changeShowRepeatPassword = () => setShowRepeatPassword(!showRepeatPassword)

  return (
    <View style={stylesRegisterForm.content}>

      <Input placeholder='E-mail'
      onChangeText={text => formik.setFieldValue("email", text)}
      errorMessage={formik.errors.email}/>
      <Input placeholder='Contraseña' secureTextEntry={showPassword ? false : true}
      onChangeText={text => formik.setFieldValue("password", text)}
      errorMessage={formik.errors.password}
      rightIcon={
        showPassword ? <Icon name='eye' type='font-awesome'
        onPress={changeShowPassword}/> : <Icon name='eye-slash' type='font-awesome'
        onPress={changeShowPassword}/>
      }
      />
      <Input placeholder='Confirmar contraseña' secureTextEntry={showRepeatPassword ? false : true}
      onChangeText={text => formik.setFieldValue("repeatPassword", text)}
      errorMessage={formik.errors.repeatPassword}
      rightIcon={
        showRepeatPassword ? <Icon name='eye' type='font-awesome'
        onPress={changeShowRepeatPassword}/> : <Icon name='eye-slash' type='font-awesome'
        onPress={changeShowRepeatPassword}/>
      }
      />

      <Button title={"Ingresar"} buttonStyle={stylesRegisterForm.button} titleStyle={stylesRegisterForm.text} onPress={formik.handleSubmit} loading={formik.isSubmitting}/>

    </View>
  )
}

export default RegisterForm
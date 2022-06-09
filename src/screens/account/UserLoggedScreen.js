import { View} from 'react-native'
import React from 'react'
import { Button, Text, Image } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { screen } from '../../utils'
import { styles } from './styles/stylesUserLoggedScreen'

const UserLoginScreen = () => {

  const navigation = useNavigation();

  const goToLogOut = () =>{

    

  }

  return (

    
    <View style={styles.content}>
      <Image
        source={require("../../../assets/img/user-gray.png")}
        style={styles.image}
      />
      <Text style={styles.textName}>Juan Perez</Text>
    
      <View style={styles.boxBottom}>
      <Button title="CERRAR SESIÓN" onPress={goToLogOut} buttonStyle={styles.button} titleStyle={styles.textBottom}/>
      </View>
      </View>

  )
}

export default UserLoginScreen
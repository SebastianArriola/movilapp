import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged} from "firebase/auth"
import UserLoggedScreen from './UserLoggedScreen'
import LoadingModal from '../../components/LoadingModal/LoadingModal'
import UserUnLoggedScreen from './UserUnLoggedScreen'

const AccountScreen = () => {

  const [hasLogged, setHasLogged] = useState(null)

  useEffect(() => {
    
    const auth =  getAuth();
    onAuthStateChanged(auth, (user)=>{

      user ? setHasLogged(true) : setHasLogged(false)

    })

  }, [])
  
  if(hasLogged === null) {

    return <LoadingModal/>

  }  

  return (

    <View>

        {hasLogged ? <UserLoggedScreen/> : <UserUnLoggedScreen />}

    </View>

  )

    
  
}

export default AccountScreen
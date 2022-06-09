import { View, ActivityIndicator } from 'react-native'
import { Overlay, Text } from '@rneui/base';
import React from 'react'

const LoadingModal = () => {
  return (
      <Overlay isVisible={true} overlayStyle={{backgroundColor:"transparent", shadowColor: "transparent"}}>

        <View >

            <ActivityIndicator size={50} color="#002184" style={{backgroundColor: "transparent"}}/>

        </View>

      </Overlay>
  )
}

export default LoadingModal
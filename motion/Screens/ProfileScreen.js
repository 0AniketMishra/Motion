import { View, Text } from 'react-native'
import React from 'react'
import BottomTabs from '../Components/BottomTabs'

const ProfileScreen = () => {
  return (
    <View style={{flex: 1,backgroundColor: 'black'}}>
      <Text>ProfileScreen</Text>
      <BottomTabs/>
    </View>
  )
}

export default ProfileScreen
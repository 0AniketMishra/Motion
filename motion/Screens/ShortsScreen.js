import { View, Text } from 'react-native'
import React from 'react'
import BottomTabs from '../Components/BottomTabs'
import Header from '../Components/Header'

const ShortsScreen = () => {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
<View>
<Header/>
</View>
<BottomTabs/>     
    </View>
  )
}

export default ShortsScreen
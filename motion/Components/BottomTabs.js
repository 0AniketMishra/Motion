import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const BottomTabs = () => {
    const dimensions = Dimensions.get('window');

  return (
    <View style={{flex: 1, position: "absolute", bottom: 0}}>
      <View style={{height: 55, backgroundColor: 'black', width: dimensions.width}}>
        <View style={{flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center'}}>
        <Ionicons name="home" size={26} color="white" style={{marginTop: 12}}/>
        <Ionicons name="chatbubble-outline" size={26} color="white" style={{marginTop: 12}}/>
        <Ionicons name="play-circle-outline" size={26} color="white" style={{marginTop: 12}} />
        <Ionicons name="notifications-outline" size={26} color="white" style={{marginTop: 12}} />

        <Image 
          style={{ width: 28, height: 28, borderRadius: 50, paddingLeft: 4, marginTop: 10 }}
          source={{ uri: 'https://pbs.twimg.com/profile_banners/44196397/1576183471/600x200' }}
        />
        </View>
      </View>
    </View>
  )
}

export default BottomTabs
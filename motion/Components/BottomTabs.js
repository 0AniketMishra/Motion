import { View, Text, Dimensions, Image, TouchableOpacity, Touchable } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
const BottomTabs = () => {
  const dimensions = Dimensions.get('window');
  const navigation = useNavigation()
  const route = useRoute();
  
  return (
    <View style={{ flex: 1, position: "absolute", bottom: 0 }}>
      <View style={{ height: 55, backgroundColor: 'black', width: dimensions.width }}>
        <View style={{ flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            {route.name == "Home" ? (
              <Ionicons name="home" size={26} color="white" style={{ marginTop: 12 }} />
            ) : (
              <Ionicons name="home-outline" size={26} color="white" style={{ marginTop: 12 }} />

            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            {route.name == "Chat" ? (
              <Ionicons name="chatbubble" size={26} color="white" style={{ marginTop: 12 }} />

            ) : (
              <Ionicons name="chatbubble-outline" size={26} color="white" style={{ marginTop: 12 }} />

            )}
          </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Shorts")}>
  {route.name == "Shorts" ? (
    <Ionicons name="play-circle" size={26} color="white" style={{ marginTop: 12 }} />

  ) : (
    <Ionicons name="play-circle-outline" size={26} color="white" style={{ marginTop: 12 }} />

  )}
    </TouchableOpacity>

          <Ionicons name="notifications-outline" size={26} color="white" style={{ marginTop: 12 }} />

         <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
         {route.name == "Profile" ? (
          <Image
            style={{ width: 30, height: 30, borderRadius: 50, paddingLeft: 4, marginTop: 10, borderWidth: 2, borderColor: '#0078E9', borderRadius: 50 }}
            source={{ uri: 'https://pbs.twimg.com/profile_banners/44196397/1576183471/600x200' }}
          />
         ) : (
        <Image
            style={{ width: 30, height: 30, borderRadius: 50, paddingLeft: 4, marginTop: 10 }}
            source={{ uri: 'https://pbs.twimg.com/profile_banners/44196397/1576183471/600x200' }}
          />
         )}
         </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default BottomTabs
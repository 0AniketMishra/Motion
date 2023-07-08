import { View, Text, Dimensions, Image, TouchableOpacity, Touchable, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
const BottomTabs = () => {
  const dimensions = Dimensions.get('window');
  const navigation = useNavigation()
  const route = useRoute();
  const {userdata} = useAuth()
  return (
    <View style={{ flex: 1, position: "absolute", bottom: 0 }}>
      <View style={{ height: 55, backgroundColor: 'black', width: dimensions.width }}>
        <View style={{ flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center' }}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            {route.name == "Home" ? (
              <Ionicons name="home" size={26} color="white" style={{ marginTop: 12 }} />
            ) : (
              <Ionicons name="home-outline" size={26} color="white" style={{ marginTop: 12 }} />

            )}
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Chat')}>
            {route.name == "Chat" ? (
              <Ionicons name="chatbubble" size={26} color="white" style={{ marginTop: 12 }} />

            ) : (
              <Ionicons name="chatbubble-outline" size={26} color="white" style={{ marginTop: 12 }} />

            )}
          </Pressable>
    <Pressable onPress={() => navigation.navigate("Shorts")}>
  {route.name == "Shorts" ? (
    <Ionicons name="play-circle" size={26} color="white" style={{ marginTop: 12 }} />

  ) : (
    <Ionicons name="play-circle-outline" size={26} color="white" style={{ marginTop: 12 }} />

  )}
    </Pressable>

          <Ionicons name="notifications-outline" size={26} color="white" style={{ marginTop: 12 }} />

         <Pressable onPress={() => navigation.navigate("Profile")}>
         {route.name == "Profile" ? (
          <Image
            style={{ width: 30, height: 30, borderRadius: 50, paddingLeft: 4, marginTop: 10,  borderRadius: 50 }}
            source={{ uri: userdata?.profile ? userdata.profile : "https://instagram.fdel25-4.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fdel25-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=cuAabRYd6LoAX8H5kjd&edm=ACkRbIEBAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfBUzEKoZ2tokTKSxPKzB4J8VBWQZQc_X3Bxqe4Fq_B3zw&oe=64A1864F&_nc_sid=cd0945" }}
          />
         ) : (
        <Image
            style={{ width: 30, height: 30, borderRadius: 50, paddingLeft: 4, marginTop: 10 }}
            source={{ uri: userdata?.profile ? userdata.profile : "https://instagram.fdel25-4.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fdel25-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=cuAabRYd6LoAX8H5kjd&edm=ACkRbIEBAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfBUzEKoZ2tokTKSxPKzB4J8VBWQZQc_X3Bxqe4Fq_B3zw&oe=64A1864F&_nc_sid=cd0945" }}
          />
         )}
         </Pressable>
        </View>
      </View>
    </View>
  )
}

export default BottomTabs
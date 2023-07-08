import { View, Text, Image, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BottomTabs from '../Components/BottomTabs'
import useAuth from '../hooks/useAuth'
import Header from '../Components/Header'
import Stories from '../Components/Stories'
import Highlights from '../Components/Highlights'
import Post from '../Components/Post'
import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';


const UserProfileScreen = () => {
    const route = useRoute()
  const { userdata } = route.params;
  const [currentTab, setCurrentTab] = useState("Posts")
  const [posts, setPosts] = useState({ "__v": 0, "_id": "649d0c31f332ee28bf2c19c4", "comments": [], "email": "a@gmail.com", "image1": "https://firebasestorage.googleapis.com/v0/b/social-368115.appspot.com/o/Bb?alt=media&token=8b2dce78-7b80-47a2-b098-9786cbf95082", "image2": "https://firebasestorage.googleapis.com/v0/b/social-368115.appspot.com/o/Bb2?alt=media&token=5a21f371-3fc0-43dc-bf9f-4473558ff5f8", "image3": "", "image4": "", "likes": [], "posttext": "A random picture of a project.. " })
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <ScrollView>
      <View>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 14, backgroundColor: 'black' }}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
          </View>
         
         
         <View style={{ marginLeft: 6, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: 'white' }}>{userdata?.username}</Text>
            {/* <Text style={{ fontSize: 12, color: 'grey' }}>{lowerUsername}</Text> */}
          </View>
          <View style={{marginRight: 10}}>
          <Ionicons name="md-ellipsis-vertical-sharp" size={22} color="white" />
          </View>
        
          
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <View style={{ marginLeft: 18 }}>
            <Image
              style={{ width: 84, height: 84, borderRadius: 50, }}
              source={{ uri: userdata?.profile ? userdata?.profile : 'https://pbs.twimg.com/profile_banners/44196397/1576183471/600x200' }}
            />
            {/* <Text style={{color: 'white', marginTop: 10, fontSize: 15}}>{userdata.username}</Text> */}
          </View>

          <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', flex: 1, padding: 3 }}>

            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>0</Text>
              <Text style={{ color: 'white' }}>Posts</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{userdata.followers.length}</Text>
              <Text style={{ color: 'white' }}>Followers</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{userdata.following.length}</Text>
              <Text style={{ color: 'white' }}>Following</Text>
            </View>
          </View>


        </View>
        <View style={{ marginHorizontal: 18, marginTop: 6 }}>
          <View>
            <Text style={{ color: 'white', fontSize: 16 }}>{userdata.username}</Text>
            <Text style={{ color: 'white', fontSize: 15 }}>{userdata.descritption}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
            <Pressable titleSize={20} style={{ backgroundColor: '#1A1A1A', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginRight: 5, flex: 1, height: 34 }}>
              <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 14, }}>Edit Profile</Text>
            </Pressable>
            <Pressable titleSize={20} style={{ backgroundColor: '#1A1A1A', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginLeft: 5, flex: 1, height: 34 }}>
              <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 14, }}>Share Profile</Text>
            </Pressable>
          </View>
          <View style={{ marginTop: 10 }}>
            <Highlights />
          </View>





        </View>
        <View style={{ flexDirection: 'row', marginTop: 4, padding: 4, }}>
          {currentTab == "Posts" ? (
            <Pressable style={{ flex: 1, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: "white" }}>
              <Text style={{ margin: 4, color: 'white', }}>Posts</Text>
            </Pressable>
          ) : (
            <Pressable style={{ flex: 1, alignItems: 'center' }} onPress={() => setCurrentTab('Posts')}>
              <Text style={{ margin: 4, color: 'white' }}>Posts</Text>
            </Pressable>
          )}
          {currentTab == "Posts & Replies" ? (
            <Pressable style={{ flex: 1, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: "white" }}>
              <Text style={{ margin: 4, color: 'white' }}>Replies</Text>
            </Pressable>
          ) : (
            <Pressable style={{ flex: 1, alignItems: 'center' }} onPress={() => setCurrentTab('Posts & Replies')}>
              <Text style={{ margin: 4, color: 'white' }}>Replies</Text>
            </Pressable>
          )}
          {currentTab == "Media" ? (
            <Pressable style={{ flex: 1, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: "white" }}>
              <Text style={{ margin: 4, color: 'white' }}>Media</Text>
            </Pressable>
          ) : (
            <Pressable style={{ flex: 1, alignItems: 'center' }} onPress={() => setCurrentTab('Media')}>
              <Text style={{ margin: 4, color: 'white' }}>Media</Text>
            </Pressable>
          )}
          {currentTab == "Likes" ? (
            <Pressable style={{ flex: 1, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: "white" }}>
              <Text style={{ margin: 4, color: 'white' }}>Likes</Text>
            </Pressable>
          ) : (
            <Pressable style={{ flex: 1, alignItems: 'center' }} onPress={() => setCurrentTab('Likes')}>
              <Text style={{ margin: 4, color: 'white' }}>Likes</Text>
            </Pressable>
          )}
        </View>

        <View style={{marginBottom: 100}}>

          <Post post={posts} />

        </View>
      </View>
      </ScrollView>
      <BottomTabs />
    </View>
  )
}

export default UserProfileScreen
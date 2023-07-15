import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, Pressable, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios'
import { useNavigation, useRoute } from '@react-navigation/native';

const Post = ({ post,b,r }) => {
  const [ReplyModal, setReplyModal] = useState([])
  const [OptionsModal, setOptionsModal] = useState([])
  const dimensions = Dimensions.get('window');
  const [tempdata, setTempData] = useState([])
  const [replydata, setReplyData] = useState([])
  const [replypost, setReplyPost] = useState([])
  const navigation = useNavigation()
  const route = useRoute()

  useEffect(() => {
    fetch('https://social-backend-three.vercel.app/userdata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({
        email: post?.email
      })
    })
      .then(res => res.json())
      .then(async data => {
        if (data.message == "User Found") {
          setTempData(data.savedUser)
        }
      })
if(post.replyingEmail != "" ){
  fetch('https://social-backend-three.vercel.app/userdata', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({
      email: post?.replyingEmail
    })
  })
    .then(res => res.json())
    .then(async data => {
      if (data.message == "User Found") {
        setReplyData(data.savedUser)
      }
    })


    fetch('https://social-backend-three.vercel.app/postdata', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({
      postId: post?.replyingTo
    })
  })
    .then(res => res.json())
    .then(async data => {
        setReplyPost(data.post)
      
    })
}
   

  })


  return (
    <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#767676', flex: 1 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={OptionsModal}

      >
        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: "#00000aaa",
        }} >

          <View style={{
            height: 240,
            backgroundColor: "black",
            padding: 10,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12
          }}>
            <View>
              <View style={{ padding: 8, backgroundColor: 'black' }}>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setOptionsModal(false)}>
                  < Entypo name="chevron-left" size={24} color="white" />
                  <Text style={{ fontSize: 17, marginLeft: 3, fontWeight: 'bold', color: 'white' }}>Options</Text>
                </TouchableOpacity>

                <View style={{ marginTop: 12 }}>
                  <TouchableOpacity style={{ padding: 6, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
                    <Feather name="eye" size={24} color="white" />
                    <Text style={{ color: 'white', fontSize: 16, marginLeft: 4 }}>View Post</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ padding: 5, flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="user-plus" size={24} color="white" />
                    <Text style={{ color: 'white', fontSize: 16, marginLeft: 4 }}>Add To Favourites</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ padding: 5, flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="bookmark" size={24} color="white" />

                    <Text style={{ color: 'white', fontSize: 16, marginLeft: 4 }}>Bookmark</Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={{ padding: 5, flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="alert-triangle" size={24} color="red" />
                    <Text style={{ color: 'red', fontSize: 18, marginLeft: 4 }}>Report</Text>

                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>


     


      <View>
        <View
          style={{ justifyContent: "space-between", flexDirection: "row", margin: 5, }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3, }}>
            <View style={{ borderRadius: 50, marginLeft: 2 }}>
              <Image
                style={{ width: 54, height: 54, borderRadius: 50, paddingLeft: 4 }}
                source={{ uri: tempdata?.profile ? tempdata?.profile : 'https://pbs.twimg.com/profile_banners/44196397/1576183471/600x200' }}
              />
            </View>
            <View>
              <Text
                style={{ marginLeft: 10, fontWeight: "bold", fontSize: 14.5, color: 'white' }}

              >
                {tempdata?.username}
              </Text>
              <View style={{ flexDirection: "row", alignItems: 'center' }}>
              <Text style={{ marginLeft: 10, fontSize: 13, color: 'white' }}>{tempdata?.lowerUsername}  </Text>
              
 {post.replyingOn !="none" &&(<AntDesign name="swap" size={18} color="white" />)}
{post.replyingTo != "none" &&( <Text style={{marginLeft: 5, fontSize: 13, color: 'cyan', }}>{replydata?.lowerUsername}</Text>)}
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 4 }}>

            <Pressable onPress={() => setOptionsModal(true)} style={{padding: 10}}>
              <Feather name="more-horizontal" size={24} color="white" />
            </Pressable>
          </View>
        </View>
      </View>




      <View >

        <TouchableOpacity style={{
          marginLeft: 12,
          marginRight: 12,
          marginTop: 6,

        }}
        //   onPress={() => navigation.navigate("UserPost", {
        //     username: tempdata.username,
        //     lowerUsername: tempdata.lowerUsername,
        //     profile: tempdata.profilePicture,
        //     posttext: post.posttext,
        //     image1: post.image1,
        //     image2: post.image2

        //   })}
        >

          <View>
            <Text style={{color: 'white'}}>Replying To</Text>
            <View>
              
            </View>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "400", marginBottom: 10, fontFamily: 'Roboto', color: 'white' }}>{post?.posttext}</Text>

        </TouchableOpacity>
        <View >
          <ScrollView horizontal={true} >
            <View style={{ justifyContent: 'center' }}>
              {post?.image1 && (
                <>
                  <Image
                    style={{
                      width: dimensions.width - 20,
                      height: dimensions.width - 20,
                      marginLeft: 10,
                      marginRight: 10,
                      borderRadius: 10,
                      marginBottom: 6
                    }}
                    source={{ uri: post.image1 }}
                  />
                  <View style={{ position: 'absolute', zIndex: 100, right: 14, top: 8, justifyContent: 'center' }}>
                    <Text style={{ backgroundColor: 'black', borderRadius: 6, color: 'white', paddingLeft: 5, paddingRight: 5, fontSize: 12 }}>1/2</Text>
                  </View>
                </>
              )}
            </View>
            <View style={{ justifyContent: 'center' }}>
              {post?.image2 && (

                <>

                  <Image
                    style={{
                      width: dimensions.width - 20,
                      height: dimensions.width - 20,
                      marginLeft: 10,
                      marginRight: 10,
                      borderRadius: 10,

                    }}
                    source={{ uri: post.image2 }}
                  />
                  <View style={{ position: 'absolute', zIndex: 100, right: 16, top: 8 }}>
                    <Text style={{ backgroundColor: 'black', borderRadius: 6, color: 'white', paddingLeft: 5, paddingRight: 5, fontSize: 12 }}>2/2</Text>
                  </View>
                </>
              )}
            </View>
          </ScrollView>
          {b &&(
            <View style={{ paddingLeft: 10, paddingRight: 10, flexDirection: 'row', alignItems: 'center', padding: 8 }}>
            <Text style={{ fontSize: 14, fontFamily: 'Roboto', color: '#7F7F7F' }}>10:34 PM • Jun 28 2023 • </Text>
            <Text style={{ fontSize: 14, fontFamily: 'Roboto', color: 'white', fontWeight: 'bold' }}>3.1M </Text>
            <Text style={{ fontSize: 14, fontFamily: 'Roboto', color: '#7F7F7F' }}>Views </Text>


          </View>
          )}
        </View>











        {b ? (
          <View style={{
            marginLeft: 10, paddingRight: 10, paddingBottom: 4, flexDirection: 'row', alignItems: 'center', borderTopWidth: 0.5, borderTopColor: "#767676"
             }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: 'center',
                marginLeft: 4,
                marginRight: 4,
                marginTop: 6,
                marginBottom: 4,
                width: "auto",
                justifyContent: 'center',
  
              }}
            >
  
  
  
              <Pressable
                style={{ flexDirection: "row", padding: 4, alignItems: 'center' }}
  
              >
                <Ionicons name="heart" size={24} color="red" />
  
                <Text style={{ fontSize: 14, marginRight: 6, color: 'white', marginLeft: 4 }}>
                  1.2K Likes
                </Text>
              </Pressable>
  
  
  
  
              <TouchableOpacity onPress={() => navigation.navigate("UserPost",{post: post, userdata: tempdata})}
                style={{ flexDirection: "row", marginLeft: 6, padding: 4, borderRadius: 4, alignItems: 'center', }}
              >
                <Ionicons name="chatbubble-outline" size={24} color="white" />
                <Text style={{ marginLeft: 4, fontSize: 14, color: "white", marginRight: 4 }}>201 Replies</Text>
              </TouchableOpacity>
  
  
  
  
            </View>
            <Text style={{ flex: 1 }}></Text>
  
            <TouchableOpacity
              style={{ flexDirection: "row", marginLeft: 6, padding: 4, borderRadius: 4, alignItems: 'center' }}
  
            >
              <Ionicons name="share-social-outline" size={24} color="white" />
  
            </TouchableOpacity>
  
  
  
          </View>
        ) : (
          <View style={{
            marginLeft: 10, paddingRight: 10, paddingBottom: 4, flexDirection: 'row', alignItems: 'center', 
             }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: 'center',
                marginLeft: 4,
                marginRight: 4,
                marginTop: 6,
                marginBottom: 4,
                width: "auto",
                justifyContent: 'center',
  
              }}
            >
  
  
  
              <Pressable
                style={{ flexDirection: "row", padding: 4, alignItems: 'center' }}
  
              >
                <Ionicons name="heart" size={24} color="red" />
  
                <Text style={{ fontSize: 14, marginRight: 6, color: 'white', marginLeft: 4 }}>
                  1.2K Likes
                </Text>
              </Pressable>
  
  
  
  
              <TouchableOpacity onPress={() => navigation.navigate("UserPost",{post: post, userdata: tempdata})}
                style={{ flexDirection: "row", marginLeft: 6, padding: 4, borderRadius: 4, alignItems: 'center', }}
              >
                <Ionicons name="chatbubble-outline" size={24} color="white" />
                <Text style={{ marginLeft: 4, fontSize: 14, color: "white", marginRight: 4 }}>201 Replies</Text>
              </TouchableOpacity>
  
  
  
  
            </View>
            <Text style={{ flex: 1 }}></Text>
  
            <TouchableOpacity
              style={{ flexDirection: "row", marginLeft: 6, padding: 4, borderRadius: 4, alignItems: 'center' }}
  
            >
              <Ionicons name="share-social-outline" size={24} color="white" />
  
            </TouchableOpacity>
  
  
  
          </View>
        )}

      </View>
    </View>
  )
}

export default Post
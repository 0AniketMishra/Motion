import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Pressable, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import firebase from '.././firebase';
import { onSnapshot, query, doc, collection, where, updateDoc } from 'firebase/firestore'
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import * as ImagePicker from 'expo-image-picker';
import { uploadBytes, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const AddPostScreen = () => {
  const navigation = useNavigation()
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [text, onChangeText] = useState("");
  const [userInfo, setUserInfo] = useState([])
  const [localImg, setLocalImg] = useState('')
  const [localImg2, setLocalImg2] = useState('')
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");




  const [uri, setUri] = useState("")

  const uploadImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [1, 1],
      quality: 1,
    });
    setLoading(true)
    if (!result.canceled) {
      const source = { uri: result.assets[0].uri }

      try {
        const response = await fetch(result.assets[0].uri)
        const blob = await response.blob()
        const filename = result.assets[0].uri.substring(result.assets[0].uri)
        const ref = firebase.storage().ref().child(text)
        const snapshot = await ref.put(blob)
        const url = await snapshot.ref.getDownloadURL()
        setLocalImg(result.assets[0].uri)
        setImage(url)
      } catch (err) {
        console.log(err)
      }
      if (result.assets[1]) {
        try {
          const response = await fetch(result.assets[1].uri)
          const blob = await response.blob()
          const filename = result.assets[1].uri.substring(result.assets[1].uri)
          const ref = firebase.storage().ref().child(text + "2")
          const snapshot = await ref.put(blob)
          const url = await snapshot.ref.getDownloadURL()
          setLocalImg2(result.assets[1].uri)
          setImage2(url)
        } catch (err) {
          console.log(err)
        }
      }
    }
    setLoading(false)
  };



  const SubmitPost = async () => {
    try {
      fetch("https://social-backend-three.vercel.app/addpost", {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          email: user.email,
          image1: image,
          image2: image2,
          image3: image3,
          image4: image4,
          posttext: text
        })
      })
        .then(res => res.json())
    }
    catch (err) {
      console.log(err)
    }
    navigation.goBack()
    onChangeText("")
  }

  const clickImage = () => {

  }
  return (
    <ScrollView style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={{}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'black' }}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>

              < Entypo name="chevron-left" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={{ width: 34, height: 34, borderRadius: 50, }}
              source={{ uri: "https://lh3.googleusercontent.com/a/AItbvmld8x4l-U0o2L28Ipg6VMny5NvPVM0sOjiqjlT8=s96-c" }}
            />
          </View>
          <View style={{ marginLeft: 6, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: 'white' }}>Everyone</Text>
            <Ionicons name="chevron-down" size={16} color="white" style={{ marginLeft: 2 }} />

            {/* <Text style={{ fontSize: 12, color: 'grey' }}>{lowerUsername}</Text> */}
          </View>
          <Pressable style={styles.button} onPress={SubmitPost}>
            <Text style={styles.buttonText} >Post</Text>
          </Pressable>
        </View>


        <View>
          <View >
            <View style={{}}>

            </View>

            {/* <View style={{ flexDirection: "row", margin: 12, backgroundColor: 'white' }}>
            <Ionicons name="ios-globe-outline" size={16} color="#0096F6" style={{ marginLeft: 2 }} />
            <Text style={{ color: '#0096F6', marginLeft: 2, alignItems: 'center', marginBottom: 4, fontWeight: '600' }}>Everyone can reply</Text>
          </View> */}
            <View style={{ padding: 12, flexDirection: 'row', backgroundColor: 'black' }}>
              <TouchableOpacity style={{}} onPress={uploadImage}>
                <MaterialIcons name="image" size={24} color="#D4E4F4" style={{ marginLeft: 5, backgroundColor: '#0078E9', borderRadius: 18, padding: 5 }} />
              </TouchableOpacity>
              <TouchableOpacity >
                <MaterialIcons name="poll" size={24} color="#D4E4F4" style={{ marginLeft: 5, backgroundColor: '#0078E9', borderRadius: 18, padding: 5 }} />
              </TouchableOpacity>
              <TouchableOpacity >
                <MaterialIcons name="emoji-emotions" size={24} color="#D4E4F4" style={{ marginLeft: 5, backgroundColor: '#0078E9', borderRadius: 18, padding: 5 }} />
              </TouchableOpacity>
              <TouchableOpacity >
                <MaterialIcons name="my-location" size={24} color="#D4E4F4" style={{ marginLeft: 5, backgroundColor: '#0078E9', borderRadius: 18, padding: 5 }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'black', }}>
            <Feather name="edit-3" size={24} color="white" style={{ marginLeft: 6 }} />
            <TextInput
              style={styles.input}
              value={text}
              placeholderTextColor="white"
              onChangeText={onChangeText}
              placeholder="Say Something..."
              multiline={true}
            />
          </View>
        </View>

        {image && !loading ? (
          <View style={{ padding: 10, backgroundColor: 'black' }}>
            <ScrollView horizontal={true} >
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                {image2 && (
                  <View>
                    <TouchableOpacity>
                      <Image source={{ uri: localImg2 }} style={{ margin: 2, width: 175, height: 175, borderRadius: 12 }} />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => setImage2(null)} style={{ position: 'absolute', right: 0, margin: 6, backgroundColor: 'black', borderRadius: 23 }}>
                      < Entypo name="cross" size={22} color="white" />
                    </TouchableOpacity>
                    <View style={{ position: 'absolute', bottom: 0, right: 0, margin: 6, backgroundColor: 'black', borderRadius: 23, padding: 4, paddingLeft: 10, paddingRight: 10 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Edit</Text>
                      </View>
                    </View>

                  </View>

                )}
                {image && (
                 <View style={{marginLeft: 7}}>
                  <TouchableOpacity>
                      <Image source={{ uri: localImg }} style={{ margin: 2, width: 175, height: 175, borderRadius: 12 }} />
                    </TouchableOpacity >
                 <TouchableOpacity  onPress={() => setImage(null)} style={{ position: 'absolute', right: 0, margin: 6, backgroundColor: 'black', borderRadius: 23 }}>
                      < Entypo name="cross" size={22} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity  style={{ position: 'absolute', bottom: 0, right: 0, margin: 6, backgroundColor: 'black', borderRadius: 23, padding: 4, paddingLeft: 10, paddingRight: 10 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Edit</Text>
                      </View>
                    </TouchableOpacity>
                 </View>

                )}
                {image3 && (
                  <TouchableOpacity onPress={() => setImage2(null)} style={{ marginLeft: 4 }}>
                    <Image source={{ uri: localImg2 }} style={{ margin: 2, width: 175, height: 175, borderRadius: 12 }} />
                  </TouchableOpacity>
                )}
                {image4 && (
                  <TouchableOpacity onPress={() => setImage2(null)} style={{ marginLeft: 4 }}>
                    <Image source={{ uri: localImg2 }} style={{ margin: 2, width: 175, height: 175, borderRadius: 12 }} />
                  </TouchableOpacity>
                )}
                {image4 && (
                  <TouchableOpacity onPress={() => setImage2(null)} style={{ marginLeft: 4 }}>
                    <Image source={{ uri: localImg2 }} style={{ margin: 2, width: 175, height: 175, borderRadius: 12 }} />
                  </TouchableOpacity>
                )}

              </View>
            </ScrollView>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>

              <View style={{ flexDirection: 'row', alignItems: 'center',  padding: 4, borderRadius: 10, justifyContent: 'center', paddingLeft: 8, paddingRight: 8 }}>
                <Feather name="user-plus" size={18} color="#6F6F6F" />
                <Text style={{ fontSize: 13, marginLeft: 4, color: "#6F6F6F", fontWeight: 'bold' }}>Tag People.</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center',  padding: 4, borderRadius: 10, marginLeft: 2, justifyContent: 'center', paddingLeft: 8, paddingRight: 8 }}>
                <Feather name="edit" size={18} color="#6F6F6F" />
                <Text style={{ fontSize: 13, marginLeft: 4, color: "#6F6F6F", fontWeight: 'bold' }}>Add Description.</Text>
              </View>

            </View>
          </View>
        ) : loading ? (
          <View style={{ margin: 10, width: 175, height: 175, borderRadius: 12, backgroundColor: '#343434', alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator color="white" size={27} />
          </View>
        ) : (
          null
        )}

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 12,

  },
  container1: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10

  },
  button: {
    backgroundColor: '#0096F6',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 32,
    borderRadius: 24,
    width: 64,
  },
  buttonText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 16,

  },
  profile: {
    width: 40,
    heigth: 40,
    borderRadius: 50,
  },
  input: {
    fontSize: 16,
    padding: 8,
    marginRight: 22,
    textAlignVertical: 'center',
    minHeight: 60,
    backgroundColor: 'black',
    color: 'white',

  },


});



export default AddPostScreen
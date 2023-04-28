import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Pressable, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AddPostScreen = () => {
    const [text, onChangeText] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()
  return (
    <ScrollView style={{backgroundColor: 'black', flex: 1}}>
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
        <Pressable style={styles.button} >
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
            <TouchableOpacity  style={{}}>
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
       <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'black',}}>
        <Feather name="edit-3" size={24} color="white" style={{marginLeft: 6}}/>
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
        <View style={{ padding: 10, backgroundColor: 'white' }}>
          <ScrollView horizontal={true} >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {image && (
                <TouchableOpacity onPress={() => setImage(null)}>
                  <Image source={{ uri: localImg }} style={{ width: 150, height: 150, borderRadius: 12 }} />
                </TouchableOpacity>
              )}
              {image2 && (
                <TouchableOpacity onPress={() => setImage2(null)} style={{ marginLeft: 4 }}>
                  <Image source={{ uri: localImg2 }} style={{ width: 150, height: 150, borderRadius: 12 }} />
                </TouchableOpacity>
              )}
              {image2 && (
                <TouchableOpacity onPress={() => setImage2(null)} style={{ marginLeft: 4 }}>
                  <Image source={{ uri: localImg2 }} style={{ width: 150, height: 150, borderRadius: 12 }} />
                </TouchableOpacity>
              )}
              {image2 && (
                <TouchableOpacity onPress={() => setImage2(null)} style={{ marginLeft: 4 }}>
                  <Image source={{ uri: localImg2 }} style={{ width: 150, height: 150, borderRadius: 12 }} />
                </TouchableOpacity>
              )}
              {image2 && (
                <TouchableOpacity onPress={() => setImage2(null)} style={{ marginLeft: 4 }}>
                  <Image source={{ uri: localImg2 }} style={{ width: 150, height: 150, borderRadius: 12 }} />
                </TouchableOpacity>
              )}

            </View>
          </ScrollView>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#D4E4F4', padding: 4, borderRadius: 10 , justifyContent: 'center', paddingLeft: 8, paddingRight: 8}}>
              <Feather name="user-plus" size={20} color="#0078E9" />
              <Text style={{  fontSize: 14, marginLeft: 4, color: "#0078E9" }}>Tag People</Text>
            </View>
          
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#D4E4F4', padding: 4, borderRadius: 10, marginLeft: 8, justifyContent: 'center', paddingLeft: 8, paddingRight: 8 }}>
              <Feather name="edit" size={20} color="#0078E9" />
              <Text style={{  fontSize: 14, marginLeft: 4, color: "#0078E9" }}>Edit</Text>
            </View>

          </View>
        </View>
      ) : loading ? (
        <View style={{ margin: 4, width: 150, height: 150, borderRadius: 12, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
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
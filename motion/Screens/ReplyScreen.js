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
import { FontAwesome5 } from '@expo/vector-icons';

const ReplyScreen = () => {
    const { userdata } = useAuth()
    const [text, onChangeText] = useState("");
    const navigation = useNavigation()
    return (
        <View style={{ backgroundColor: 'black', flex: 1 }}>
             <View style={{ flexDirection: 'row', alignItems: 'center', padding: 14, backgroundColor: 'black' }}>
              <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={30} color="white" />
              </TouchableOpacity>
             </View>
         
         
         <View style={{ marginLeft: 6, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: 'white' }}>Reply </Text>
            {/* <Text style={{ fontSize: 12, color: 'grey' }}>{lowerUsername}</Text> */}
          </View>
          <Pressable style={styles.button}>
                    <Text style={styles.buttonText} >Post</Text>
                </Pressable>
        
          
        </View>

            <View style={{ margin: 6,zIndex: 99, maxHeight: 300 }}>
                {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>Replying To </Text>
                    <Text style={{ color: '#82C2FF', textDecorationLine: 'underline' }}>{userdata.lowerUsername}</Text>
                </View> */}
                <View style={{ flexDirection: 'row', marginTop: 8,  padding: 2, borderRadius: 8 }}>
                    <View>
                        <Image
                            style={{ width: 38, height: 38, borderRadius: 50, }}
                            source={{ uri: userdata.profile }}
                        />
                    </View>
                    <View style={{ marginLeft: 10, marginRight: 10 }}>
                        <Text style={{ color: 'white', marginRight: 18 }}>{userdata.username}</Text>
                        <Text style={{ color: 'white', marginRight: 20 }}>The texts starts from here which would represent the posttext forwarded by the user post screen.</Text>
                    </View>
                </View>
            </View>

            <View style={{borderLeftWidth: 1,borderLeftColor: 'grey', position: 'absolute',left: 26,top: 122, bottom: 400 }}>
           <Text style={{color: 'white', flex: 1}}></Text>
            </View>
            
            <View style={{marginTop: 8, zIndex: 99}}>
            <View style={{margin: 6, flexDirection: 'row', marginTop: 8,  padding: 2, borderRadius: 8 }}>
                    <View>
                        <Image
                            style={{ width: 38, height: 38, borderRadius: 50, }}
                            source={{ uri: userdata.profile }}
                        />
                    </View>
                    <View style={{ marginLeft: 10, marginRight: 10 }}>
                        <Text style={{ color: 'white', marginRight: 18 }}>{userdata.username}</Text>
                        <TextInput
                        style={{color: 'white'}}
              value={text}
              placeholderTextColor="grey"
              onChangeText={onChangeText}
              placeholder="Drop Your Message Here"
              multiline={true}
            />
                    </View>
                </View>
            </View>

        </View>
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
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 40,
        borderRadius: 24,
        width: 100,
    },
    buttonText: {
        fontWeight: 'bold',
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
        minHeight: 60,
        color: 'white',
        flex: 1,
        marginHorizontal: 15,
        borderRadius: 8,
    },


});

export default ReplyScreen
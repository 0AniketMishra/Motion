import { View, Text, TouchableOpacity, ScrollView, Image, Pressable } from 'react-native'
import React, { useReducer } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Post from '../Components/Post';
import { Feather } from '@expo/vector-icons';

const UserPostScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const { post, userdata } = route.params
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <ScrollView style={{flex: 1}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 14, backgroundColor: 'black' }}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={30} color="white" />
                        </TouchableOpacity>
                    </View>


                    <View style={{ marginLeft: 6, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: 'white' }}>Post By {userdata.username}</Text>
                        {/* <Text style={{ fontSize: 12, color: 'grey' }}>{lowerUsername}</Text> */}
                    </View>
                    <View style={{ marginRight: 10 }}>
                        <Ionicons name="md-ellipsis-vertical-sharp" size={22} color="white" />
                    </View>


                </View>

                <View style={{ flex: 1, marginBottom: 100 }}>
                    <Post post={post} b={true}/>
                    <Post post={post} />
                    
                   
                </View>
            </ScrollView>
            <View style={{}}>
                      
                        <Pressable onPress={() => navigation.navigate("Reply")} style={{ flexDirection: 'row', alignItems: 'center',backgroundColor: '#1A1A1A',  }}>
                            <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                                
                                <View >
                                    <Image
                                        style={{ width: 44, height: 44, borderRadius: 50, paddingLeft: 4 }}
                                        source={{ uri: userdata.profile ? userdata.profile : 'https://pbs.twimg.com/profile_banners/44196397/1576183471/600x200' }}
                                    />
                                </View>

                                <View style={{ marginLeft: 18, }}>
                                    <Text style={{ color: 'grey', fontSize: 15 }}>Reply To {userdata.username}</Text>
                                    {/* <Text style={{ color: 'white', fontSize: 14 }}>{userdata.lowerUsername}</Text> */}
                                </View>

                            </View>
                            <Text style={{flex: 1}}></Text>
                            <View style={{marginRight: 10}}>
                            <Feather name="edit-3" size={24} color="white" />
                            </View>
                        </Pressable>
                    </View>
        </View>
    )
}

export default UserPostScreen
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import firebase from '../firebase'
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const logout = () => {
        firebase.auth().signOut()
    }
    return (
        <View style={{ padding: 4, backgroundColor: 'black' }}>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', }}>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={logout}>
                    <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://th.bing.com/th/id/R.3d74e8bfd4ef7985f7529bb9f7650eca?rik=RCvdo0dDvjxCWg&riu=http%3a%2f%2fwww.stickpng.com%2fassets%2fimages%2f580b57fcd9996e24bc43c53e.png&ehk=%2fkYf7%2bIY6TUkpUQzwclpivMLQ8ynEgcZYehDGOzbu0E%3d&risl=&pid=ImgRaw&r=0' }} />
                    <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>{route.name}</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row',justifyContent: 'center',padding: 4, marginLeft: 4}}>
                <TouchableOpacity style={{marginLeft: 4, width: 40, height: 40, backgroundColor: '#1C1E20', borderRadius: 24, alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate("AddPost")}>
                <Entypo name="plus" size={28} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 4, width: 40, height: 40, backgroundColor: '#1C1E20', borderRadius: 24, alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate('Search')}>
                <Entypo  name="magnifying-glass" size={26} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 4, width: 40, height: 40, backgroundColor: '#1C1E20', borderRadius: 24, alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate('Search')}>
                <Ionicons name="notifications-outline" size={26} color="white" />
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Header
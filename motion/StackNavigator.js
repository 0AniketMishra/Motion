import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from './Screens/ChatScreen';
import HomeScreen from './Screens/HomeScreen';
import AddPostScreen from './Screens/AddPostScreen';
import ShortsScreen from './Screens/ShortsScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{animation: 'none',}} />
            <Stack.Screen name="Chat" component={ChatScreen} options={{animation: 'none',}} />
            <Stack.Screen name="AddPost" component={AddPostScreen}  />
            <Stack.Screen name="Shorts" component={ShortsScreen} options={{animation: 'none',}} />
        </Stack.Navigator>
    )
}

export default StackNavigator
import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from './Screens/ChatScreen';
import HomeScreen from './Screens/HomeScreen';
import AddPostScreen from './Screens/AddPostScreen';
import ShortsScreen from './Screens/ShortsScreen';
import LoginScreen from './Screens/LoginScreen';
import useAuth from './hooks/useAuth';
import SignupScreen from './Screens/SignupScreen';
import SearchScreen from './Screens/SearchScreen';
import ProfileScreen from './Screens/ProfileScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator(); 
    const { user } = useAuth()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
   <>
    <Stack.Screen name="Home" component={HomeScreen} options={{animation: 'none',}} />
  <Stack.Screen name="Chat" component={ChatScreen} options={{animation: 'none',}} />
  <Stack.Screen name="AddPost" component={AddPostScreen} options={{animation: 'none',}} />
  <Stack.Screen name="Shorts" component={ShortsScreen} options={{animation: 'none',}} />
  <Stack.Screen name="Search" component={SearchScreen} options={{animation: 'none',}} />
  <Stack.Screen name="Profile" component={ProfileScreen} options={{animation: 'none',}} />
  </>
          ):(
         <>
  <Stack.Screen name="Login" component={LoginScreen} options={{animation: 'none',}} />
  <Stack.Screen name="Signup" component={SignupScreen} options={{animation: 'none',}} />

         </>
          )}
        </Stack.Navigator>
    )
}

export default StackNavigator
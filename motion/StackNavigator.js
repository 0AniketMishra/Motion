import { View, Text, Image, StyleSheet, Settings } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useAuth from './hooks/useAuth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { getFocusedRouteNameFromRoute, useNavigation, useRoute } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen'
import ChatScreen from './Screens/ChatScreen'
import LoginScreen from './Screens/LoginScreen'
import SignupScreen from './Screens/SignupScreen'
import ProfileScreen from './Screens/ProfileScreen'
import HomeNavigation from './Navigation /HomeNavigation';





const Stack = createBottomTabNavigator();
const Sck2ta = createNativeStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth()
  const navigation = useNavigation()
  
 
  return (

    
   
<Stack.Navigator 

      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        
        tabBarStyle: {
            backgroundColor: 'black', 
            borderTopWidth: 0
      
          },
          
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor;
          let iconSize = 24
          
          if (route.name === 'Home') {

            iconName = focused
              ? 'home'
              : 'home-outline';
            iconColor = focused
              ? '#0078E9'
              : "white"
          } else if (route.name === 'ProfileNavigation') {

            iconName = focused ? 'person' : 'person-outline';
            iconColor = focused
              ? '#0078E9'
              : "white"
          }
          else if (route.name === 'Chats') {

            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            iconColor = focused
              ? '#0078E9'
              : "white"
          }
          else if (route.name === 'Login') {

            iconName = focused ? 'person' : 'person-outline';
            iconColor = focused
              ? '#0078E9'
              : "white"
          }
          else if (route.name === 'Signup') {

            iconName = focused ? 'person-add' : 'person-add-outline';
            iconColor = focused
              ? '#0078E9'
              : "white"
          }
          else if (route.name === 'Shorts') {
            iconSize = 28
            iconName = focused ? 'play-circle' : 'play-circle-outline';
            iconColor = focused
              ? '#FF7134'
              : "white"
            
          }
          else if (route.name === 'Notifications') {
            
            iconName = focused ? 'notifications' : 'notifications-outline';
            iconColor = focused
              ? '#0078E9'
              : "white"
          }
         

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={iconSize} color={iconColor} />;
          ;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'white',
      })}>

        
            {user ? (
              <>
          <Stack.Screen name="Home" component={HomeNavigation} />
          <Stack.Screen name="Chats" component={ChatScreen} />
          <Stack.Screen name="Shorts" component={ChatScreen} />
          <Stack.Screen name="Notifications" component={ChatScreen} />
          <Stack.Screen name="ProfileNavigation" component={ProfileScreen} />
  

         
          </>
            ) : (
              <>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Signup" component={SignupScreen}/>
          </>
          )}
          </Stack.Navigator>
   
  )
}

export default StackNavigator
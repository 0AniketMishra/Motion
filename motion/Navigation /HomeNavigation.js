import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import AddPostScreen from '../Screens/AddPostScreen'
import UserProfileScreen from '../Screens/UserProfileScreen'
import UserPostScreen from '../Screens/UserPostScreen';
import SearchScreen from '../Screens/SearchScreen';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import ReplyScreen from '../Screens/ReplyScreen';


const HomeNavigation = () => {
  const Stack = createNativeStackNavigator();
    const navigation = useNavigation()
    const route = useRoute()


    useEffect(() => {
      const routeName = getFocusedRouteNameFromRoute(route);
      if("AddPost".includes(getFocusedRouteNameFromRoute(route))){
        navigation.setOptions({tabBarStyle: {display: 'none'}});
       }else if("a".includes(getFocusedRouteNameFromRoute(route))){
        navigation.setOptions({tabBarStyle: {display: 'none'}});

       }else if("Message".includes(getFocusedRouteNameFromRoute(route))){
        navigation.setOptions({tabBarStyle: {display: 'none'}});

       }
       else if("UserPostScreen".includes(getFocusedRouteNameFromRoute(route))){
        navigation.setOptions({tabBarStyle: {display: 'none'}});

       }
       else if("Reply".includes(getFocusedRouteNameFromRoute(route))){
        navigation.setOptions({tabBarStyle: {display: 'none'}});

       }
        else {
       navigation.setOptions({tabBarStyle: {display: 'flex',backgroundColor: 'black',borderTopWidth: 0}});
      }
  }, [navigation, route]);


    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AddPost" component={AddPostScreen}  />
            <Stack.Screen name="UserProfile" component={UserProfileScreen}  />
            <Stack.Screen name="UserPost" component={UserPostScreen}  />
            <Stack.Screen name="Search" component={SearchScreen}  />
            <Stack.Screen name="Reply" component={ReplyScreen}  />

    </Stack.Navigator>
  )
}

export default HomeNavigation
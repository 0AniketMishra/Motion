import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Stories from '../Components/Stories'
import { ScrollView } from 'react-native'
import Post from '../Components/Post'
import BottomTabs from '../Components/BottomTabs'


const HomeScreen = () => {
  return (
    <View>
         <StatusBar
       animated={true}
       backgroundColor="black"
       barStyle="light-content" 
           />
     
    <ScrollView>
    <Header/>
    <Stories/>
    <Post/>
    <Post/>
    <Post/> 
    </ScrollView>
    <BottomTabs/>
    </View>
  )
}

export default HomeScreen
import { View, Text, StatusBar, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header'
import Stories from '../Components/Stories'
import { ScrollView } from 'react-native'
import Post from '../Components/Post'
import BottomTabs from '../Components/BottomTabs'


const HomeScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    
  }
  return (
    <View >
         <StatusBar
       animated={true}
       backgroundColor="black"
       barStyle="light-content" 
           />
           
    <ScrollView refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh}/>}>
    <View style={{backgroundColor: 'black', flex: 1}}>
    <Header/>
    <Stories/>
    <Post/>
    <Post/>
    <Post/> 

    </View>
    </ScrollView>
    <BottomTabs/>

    </View>
  )
}

export default HomeScreen
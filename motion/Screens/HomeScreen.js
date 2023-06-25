import { View, Text, StatusBar, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Stories from '../Components/Stories'
import { ScrollView } from 'react-native'
import Post from '../Components/Post'
import BottomTabs from '../Components/BottomTabs'
import axios from 'axios'


const HomeScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [posts, setPosts] = useState([{_id: "aaaaa"}])
  const handleRefresh = () => {
    
  }
  useEffect(() => {

    axios.post('https://social-backend-three.vercel.app/allposts', {})
    .then(function (response) {
      setPosts(response.data.post);
      
  
    })
    
    },[])
  return (
    <View >
         <StatusBar
       animated={true}
       backgroundColor="black"
       barStyle="light-content" 
           />
           
    <ScrollView refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh}/>}>
    <View style={{backgroundColor: 'black', flex: 1, marginBottom: 20}}>
    <Header/>
    <Stories/>
    {posts.map((post,_id) => (
       <Post post={post} key={_id} />
))}
    </View>
    </ScrollView>
    <BottomTabs/>

    </View>
  )
}

export default HomeScreen
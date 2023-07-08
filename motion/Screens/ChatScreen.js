import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import BottomTabs from '../Components/BottomTabs'
import Header from '../Components/Header'
import ChatList from '../Components/ChatList'


const ChatScreen = () => {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
        <StatusBar
        animated={true}
       />
      <Header/>
      <ChatList/>
    </View>
  )
}

export default ChatScreen
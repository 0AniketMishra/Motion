import { View, Text } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import firebase from '../firebase'
import axios from 'axios';
const AuthConText = createContext({})



export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [userdata, setUserData] = useState(null)

  const userHandler =  user =>
    user ?  setCurrentUser(user)  :  setCurrentUser(null)

    
  useEffect(
    () => {

       firebase.auth().onAuthStateChanged(user => userHandler(user))
      
     
    },
    []
  )
  useEffect(() => {
    if(currentUser != null){
      axios.post('https://social-backend-three.vercel.app/userdata', {email: currentUser?.email})
     .then(function (response) {
        setUserData(response.data.savedUser)
     })
     }
  })

  
  return (
    <AuthConText.Provider value={{
        user: currentUser,
        userdata: userdata,
    }}>
        {children}
    </AuthConText.Provider>
  )
}
export default function useAuth() {
    return useContext(AuthConText)
}
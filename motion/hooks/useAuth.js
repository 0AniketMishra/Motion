import { View, Text } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import firebase from '../firebase'

const AuthConText = createContext({})



export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)


  const userHandler =  user =>
    user ?  setCurrentUser(user)  :  setCurrentUser(null)

    
  useEffect(
    () => {

       firebase.auth().onAuthStateChanged(user => userHandler(user))
      
     
    },
    []
  )

  
  return (
    <AuthConText.Provider value={{
        user: currentUser,
      
    }}>
        {children}
    </AuthConText.Provider>
  )
}
export default function useAuth() {
    return useContext(AuthConText)
}
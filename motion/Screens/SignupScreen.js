import { View, Text, StyleSheet, Image, TextInput, Alert, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'
import firebase from '../firebase'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'


const SignupScreen = () => {
    
    const navigation = useNavigation()
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required("An email is required."),
        username: Yup.string().required().min(2,"A username is required."),
        password: Yup.string()
            .required()
            .min(6, 'Your password must be at least 8 characters long')
    })

    const onSignup = async (email,password,username) => {
      try {
        const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log("Success")
        fetch('https://social-backend-three.vercel.app/signup', {
         method: 'POST', 
         headers: {
           "Content-Type": 'application/json'
         }, 
         body: JSON.stringify({email: email, username: username, password: password})
        })
        .then(res => res.json()).then(
         data => {
           if(data.message === "User Registered Successfully!"){
             console.log("Credentials stored in database")
           }
         }
        )
       } catch(error) {
     console.log(error.message)
       }
    }
  return (
      <View style={styles.container}>
          <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{ uri: 'https://th.bing.com/th/id/R.3d74e8bfd4ef7985f7529bb9f7650eca?rik=RCvdo0dDvjxCWg&riu=http%3a%2f%2fwww.stickpng.com%2fassets%2fimages%2f580b57fcd9996e24bc43c53e.png&ehk=%2fkYf7%2bIY6TUkpUQzwclpivMLQ8ynEgcZYehDGOzbu0E%3d&risl=&pid=ImgRaw&r=0', height: 100, width: 150 }} /> 
          </View>
         {/* New code  */}
         <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: '', username: '', password: '' }}
        onSubmit={(values) => {
          onSignup(values.email, values.password, values.username)
        }}
        validationSchema={SignupFormSchema}
        validateOnMount={true}

      >
        {({ handleChange, handleSubmit, handleBlur, values, isValid }) => (
          <>
            <View style={[
              styles.inputField,
              {
                borderColor:
                  values.email.length < 1 || Validator.validate(values.email)
                    ? '#ccc'
                    : 'red'
              }
            ]}>
              <TextInput
                placeholderTextColor='white'
                placeholder='Phone Number, Username or Email'
                autoCapitalize='none'
                style={{color: 'white'}}
                keyboardType='email-address'
                textContentType='emailAddress'
               
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View style={[
              styles.inputField,
              {
                borderColor:
                  values.username.length < 1 || values.username.length > 2
                    ? '#ccc'
                    : 'red'
              }
            ]}>
              <TextInput
                placeholderTextColor='white'
                style={{color: 'white'}}
                placeholder='Username'
                autoCapitalize='none'
                textContentType='username'
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}

              />
            </View>
            <View style={[
              styles.inputField,
              {
                borderColor:
                  values.password.length < 1 || values.password.length > 6
                    ? '#ccc'
                    : 'red'
              }
            ]}>
              <TextInput
                style={{color: 'white'}}
                placeholderTextColor='white'
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}

              />
            </View>
            <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
              <Text style={{ color: '#6BB0F5' }}>Forgot Password ?</Text>
            </View>
            <Pressable titleSize={20} style={styles.button(isValid)} onPress={handleSubmit} disabled={!isValid}>
              <Text style={styles.buttonText}>Signup</Text>
            </Pressable>
            <View style={styles.signupContainer}>
              <Text style={{color: 'white'}}>Already have an account?  </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: '#6BB0F5' }}>Login</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
      </View>
  )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 50,
        paddintHorizontal: 12,

    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,

    },
    wrapper: {
        marginTop: 60,
        margin: 20,
      },
      inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: 'black',
        marginBottom: 10,
        borderWidth: 1,
      },
      button: isValid => ({
        backgroundColor: isValid ? '#0096F6' : '#5CB0FF',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
      }),
      buttonText: {
        fontWeight: '600',
        color: 'black',
        fontSize: 20,
      },
      signupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 20,
      }
})

export default SignupScreen
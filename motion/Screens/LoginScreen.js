import { View, Text, Image, TextInput,Alert, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import  firebase  from '../firebase'
import useAuth from '../hooks/useAuth' 
import { useNavigation } from '@react-navigation/native'
 
const LoginScreen = () => {
    const { signInWithGoogle } = useAuth()
    const navigation = useNavigation()
    
const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required("An email is required."),
        password: Yup.string()
        .required()
        .min(6, 'Your password must be at least 8 characters long')
    })

    const onLogin = async (email, password) => {
      try{
   setLoading(true)
      await firebase.auth().signInWithEmailAndPassword(email, password)
   setLoading(false)

      console.log("Login Success! 🔥", email, password)
      } catch(error) {
        console.log(error.message);
      }
    } 


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{ uri: 'https://th.bing.com/th/id/R.3d74e8bfd4ef7985f7529bb9f7650eca?rik=RCvdo0dDvjxCWg&riu=http%3a%2f%2fwww.stickpng.com%2fassets%2fimages%2f580b57fcd9996e24bc43c53e.png&ehk=%2fkYf7%2bIY6TUkpUQzwclpivMLQ8ynEgcZYehDGOzbu0E%3d&risl=&pid=ImgRaw&r=0', height: 100, width: 150 }} /> 
      
      </View>
     <View style={styles.wrapper}>
     <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={(values) => {
        onLogin(values.email, values.password)
      }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      
     >
        {({handleChange, handleSubmit, handleBlur, values, isValid }) => (
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
                      style={{color: 'white'}}
                      placeholderTextColor='white'
                      placeholder='Phone Number, Username or Email'
                      autoCapitalize='none'
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
                                  values.password.length < 1  || values.password.length > 6 
                                      ? '#ccc'
                                      : 'red'
                          }
                      ]}>
                  <TextInput
                      placeholderTextColor='white'
                      style={{color: 'white'}}
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
                   {loading ? (
                  <Text style={styles.buttonText}>Loading..</Text>

                   ) : (
                    <Text style={styles.buttonText}>Login</Text>

                   )}
              </Pressable>
              <View style={styles.signupContainer}>
                  <Text style={{color: 'white'}}>Don't have an account yet?   </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                      <Text style={{ color: '#6BB0F5' }} >Signup</Text>
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
  wrapper : {
    marginTop : 60,
    margin: 20,
  }, 
  inputField: {
    borderRadius : 4, 
    padding: 12, 
    backgroundColor: 'black', 
    marginBottom : 10,
    color: 'white',
    borderWidth : 1,
  }, 
  button: isValid => ({
    backgroundColor: isValid ? '#0096F6' : '#5CB0FF', 
    alignItems : 'center',
    justifyContent: 'center',
    minHeight: 42, 
    borderRadius : 4,
  }), 
  buttonText: {
    fontWeight: '600',
    color: 'black',
    fontSize : 20,
  }, 
  signupContainer: {
    flexDirection: 'row', 
    width: '100%',
    justifyContent: 'center',
    marginTop: 50,
  }
})

export default LoginScreen
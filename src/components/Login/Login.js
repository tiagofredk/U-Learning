import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import FormSubmitButton from './FormSubmitButton'
import FormContainer from './FormContainer'
import FormHeader from './FormHeader'
import FormInput from './FormInput'
import { MainContext } from '../../context/MainContext'
import { isValidEmail, isValidObjField, updateError } from '../utils/methods';
import axios from 'axios'

const Login = () => {
  const navigation = useNavigation();

  const {setUser, isLogedIn, setIsLogedIn, profile, setProfile } = useContext(MainContext);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const { email, password } = userInfo;
  
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('Required all fields!', setError);

    if (!isValidEmail(email)) return updateError('Invalid email!', setError);

    if (!password.trim() || password.length < 7)
      return updateError('Password is too short!', setError);

    return true;
  };

  if(error != ""){
    alert(error)
  }

  const submitForm = async () => {

    if (isValidForm()) {
      
      try {

        let config = {
          header: {
            Accept: 'application/json',
            "content-Type": "application/json"
          }
        };

        const res = await axios.post(
          "https://ulearning-backend.vercel.app/login",
          userInfo,
          config
        )
        
        console.log(res.data.message)
        if (res.data.message === "Incorrect email"){
          alert("incorrect email")
        }else if(res.data.message === "Incorrect password"){
          alert("Incorrect password")
        }else{

          let fullname = res.data.fullname;
          setUser(res.data.username)
                  
          let userProfile={fullname, email}
          
          setProfile(userProfile);
          
            setUserInfo({ email: '', password: '' });
            setIsLogedIn(true);
            navigation.navigate("HomeStack");
        }
        
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <FormContainer>
      {/* <StackNavigator/> */}
      <SafeAreaView>
        <FormHeader
          leftHeading='Log In'
          rightHeading='Back'
          subHeading='By using our services you are agreeing to our Terms and Privacy Statament'
        />
        <FormInput
          value={email}
          onChangeText={value => handleOnChangeText(value, 'email')}
          label='Email'
          placeholder='E-mail'
          autoCapitalize='none'
        />
        <FormInput
          value={password}
          onChangeText={value => handleOnChangeText(value, 'password')}
          label='Password'
          placeholder='********'
          autoCapitalize='none'
          secureTextEntry
        />
        <FormSubmitButton onPress={submitForm} title='Login' />
        
        {/* <Button onPress={() => navigation.navigate("Home")} title="Home" /> */}
        {/* <Button onPress={() => navigation.navigate("Signin")} title="Signin" /> */}

      </SafeAreaView>
      <Text style={styles.text} onPress={() => navigation.navigate("Signin")}>New Here? Create an account</Text>
    </FormContainer>
  )
}

export default Login

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text:{
    // flex: 1,
    // justifyContent: "center"
    marginTop:100,
    textAlign: "center",
    color:"#493d8a",

  }
})
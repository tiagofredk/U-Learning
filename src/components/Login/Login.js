import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import FormContainer from './FormContainer'
import FormInput from './FormInput'
import { MainContext } from '../../context/MainContext'
import FormSubmitButton from './FormSubmitButton'
import FormHeader from './FormHeader'
import { isValidEmail, isValidObjField, updateError } from '../utils/methods';
import axios from 'axios'
console.log();

const Login = () => {
  const navigation = useNavigation();

  const {isLogedIn, setIsLoggedIn } = useContext(MainContext);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const { email, password } = userInfo;
  // console.log(userInfo);

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

  const submitForm = async () => {

    if (isValidForm()) {
      // console.log(userInfo);
      try {

        let config = {
          header: {
            Accept: 'application/json',
            "content-Type": "application/json"
          }
        };

        const res = await axios.post(
          'https://ulearning-backend-mwnxs09vr-tiagofredk.vercel.app/login',
          userInfo,
          config
        );

        // const res = fetch('https://ulearning-backend-mwnxs09vr-tiagofredk.vercel.app/login', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(
        //     userInfo
        //   )

        // }).then(res => res.json())
        // .then(data=> {
        //   console.log(data);
        // })

        // console.log("response from fetch");
        console.log(await res.data);

        if (res.data) {
          setUserInfo({ email: '', password: '' });
          // setProfile(res.data.user);
          setIsLoggedIn(true);
          console.log(isLogedIn);
          navigation.navigate("Home");
        }
        console.log(isLogedIn);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <FormContainer>
      <SafeAreaView>
        <FormHeader
          leftHeading='Login'
          rightHeading='Back'
          subHeading='Enter with your e-mail and password'
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

        <Button onPress={() => navigation.navigate("Home")} title="Home" />
        <Button onPress={() => navigation.navigate("Signin")} title="Signin" />
      </SafeAreaView>
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
})
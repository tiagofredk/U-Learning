import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import FormContainer from './FormContainer'
import FormInput from './FormInput'
import { MainContext } from '../../context/MainContext'
import FormSubmitButton from './FormSubmitButton'


const Login = () => {
  const navigation = useNavigation();

  const { setIsLoggedIn, setProfile } = useContext(MainContext);
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

    if (!password.trim() || password.length < 8)
      return updateError('Password is too short!', setError);

    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      try {
        const res = await client.post('/sign-in', { ...userInfo });

        if (res.data.success) {
          setUserInfo({ email: '', password: '' });
          setProfile(res.data.user);
          setIsLoggedIn(true);
        }

        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <FormContainer>
    <SafeAreaView>
      <Text>Login</Text>
      
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
    
      <Button onPress={()=> navigation.navigate("Home") } title="Home"/>
      <Button onPress={()=> navigation.navigate("Signin") } title="Signin"/>
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
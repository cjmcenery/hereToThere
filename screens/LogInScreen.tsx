import { StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, ScrollView, Button } from 'react-native';
import * as React from 'react'

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import axios from 'axios'

export default function LogInScreen({navigation}) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '257727206962-1dlkodv6t7u6ho1kqpuk90672b4sv5ju.apps.googleusercontent.com',
    iosClientId: '257727206962-fc1akit4mnk85iti0b5pmc48kp7594oa.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: '257727206962-1dlkodv6t7u6ho1kqpuk90672b4sv5ju.apps.googleusercontent.com',
  });

  const[alreadyUser, setAlreadyUser] = React.useState(false)
  const[userDetails, setUserDetails] = React.useState({})
  
  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      }
      getUserInfoFromGoogle()
  }, [response]);

function isUser(userDetails:any){
  console.log('checking if user')
  fetch('http://192.168.1.74:3001/doesUserExist?email='+userDetails.email)
  .then((response)=>response.json())
  .then((json)=>setAlreadyUser(json)).then(()=>console.log(alreadyUser))
  }

  async function getUserInfoFromGoogle() {
    console.log('got google info')
    await fetch('https://www.googleapis.com/oauth2/v3/userinfo?access_token='+response.authentication.accessToken)
  .then((res)=>res.json()).then((user)=>setUserDetails(user))
  }


React.useEffect(() => {
  isUser(userDetails)
},[userDetails])

React.useEffect(()=> {
  console.log(alreadyUser)
  if ( alreadyUser === true) {
  navigation.replace('Root', {
    screen: 'Profile',
    params: { email: userDetails.email }}), {email: userDetails.email}}
    else {
      navigation.navigate('SignUp', {email: userDetails.email, firstName: userDetails.given_name, lastName: userDetails.family_name})}
}, [alreadyUser])
  


  //handleCredentialResponse(response)
  return (
    <View style={styles.container}>
      <Text>{}</Text>
      <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

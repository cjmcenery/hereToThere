import { StyleSheet, TextInput, Button } from 'react-native';
import * as React from 'react';
import { Text, View, } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function SignUp(navigation, emailObject, firstNameObject, lastName) {
const email = emailObject.route.params.email
const firstName = emailObject.route.params.firstName

const [location, onChangeLocation] = React.useState('');
const [age, onChangeAge] = React.useState('');
const [bio, onChangeBio] = React.useState('');

function addUser() {
fetch('http://192.168.1.74:3001/addUser', {
    method: 'PUT',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    },    
    body: new URLSearchParams({
      firstName: 'React Hooks POST Request Example',
      lastName: '',
      email: '',
      location: location,
      age: age,
      bio: bio
    }).toString()
});
navigation.replace('Root', {
  screen: 'Profile',
  params: { email: userDetails.email }}), {email: userDetails.email}
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>hereToThere</Text>
      <Text style={styles.title}>Welcome {firstName}!</Text>
      <Text style={styles.title}>Tell us a little about yourself.</Text>
      <View style={styles.line}>
        <Text style={styles.label}>Where do you live?</Text>
        <TextInput 
        style={styles.singleLineInput}
        onChangeText={text => onChangeLocation(text)}
        value = { location }
        placeholder='City, State'
        placeholderTextColor={'black'}
        />
      </View>
      <View style={styles.line}>
        <Text style={styles.label}>How old are you?</Text>
        <TextInput 
        style={styles.singleLineInput}
        onChangeText={text => onChangeAge(text)}
        value = { age }
        placeholder='age'
        placeholderTextColor={'black'}
        />
      </View>

        <Text style={styles.label}>Bio:</Text>
        <TextInput 
        style={styles.multiLineInput}
        onChangeText={text => onChangeBio(text)}
        value = { bio }
        placeholder='Tell us a little about yourself'
        placeholderTextColor={'black'}
        multiline={true}
        textAlign='left'
        numberOfLines={5}
        />

      <Button
      onPress={addUser}
      title='Help me get THERE!'
      color= 'blue'/>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  singleLineInput: {
      backgroundColor: 'white',
      padding: 5,
      width: 150,
      marginBottom: 15,
  },
  multiLineInput: {
    backgroundColor: 'white',
    padding: 5,
    width: 300,
    marginBottom: 15,
},
  label: {
      marginRight: 15,
      fontWeight: 'bold',
      fontSize: 25,
  },
  line: {
      flexDirection: 'row',
  }
});



import { StyleSheet, TextInput, Button } from 'react-native';
import * as React from 'react';
import { Text, View, } from '../../components/Themed';

export default function AddTravel() {

const [fromCity, onChangeFrom] = React.useState('');
const [toCity, onChangeTo] = React.useState('');

function addReview() {
fetch('http://192.168.1.74:3001/addReview', {
    method: 'PUT',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    },    
    body: new URLSearchParams({
      fromCity: 'React Hooks POST Request Example',
      fromState: '',
      toCity: '',
      toState:'',
      review: ''
    }).toString()
});
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Travel Review!</Text>
      <View style={styles.line}>
        <Text style={styles.label}>From:</Text>
        <TextInput 
        style={styles.singleLineInput}
        onChangeText={text => onChangeFrom(text)}
        value = { fromCity }
        placeholder='City, State'
        placeholderTextColor={'black'}
        />
      </View>
      <View style={styles.line}>
        <Text style={styles.label}>To:</Text>
        <TextInput 
        style={styles.singleLineInput}
        onChangeText={text => onChangeTo(text)}
        value = { toCity }
        placeholder='City, State'
        placeholderTextColor={'black'}
        />
      </View>

        <Text style={styles.label}>Review:</Text>
        <TextInput 
        style={styles.multiLineInput}
        onChangeText={text => onChangeTo(text)}
        value = { toCity }
        placeholder='Type your review'
        placeholderTextColor={'black'}
        multiline={true}
        textAlign='left'
        numberOfLines={5}
        />

      <Button
      onPress={addReview}
      title='Add Travel Review'
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



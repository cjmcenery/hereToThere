import { StyleSheet, TextInput, Button, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Pressable, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { Text, View, } from '../../components/Themed';

export default function AddTravel() {

const [fromCity, onChangeFromCity] = React.useState('');
const [fromState, onChangeFromState] = React.useState('');
const [toCity, onChangeToCity] = React.useState('');
const [toState, onChangeToState] = React.useState('');
const [review, onChangeReview] = React.useState('');

const ref_input2 = React.useRef();
const ref_input3 = React.useRef();
const ref_input4 = React.useRef();
const ref_input5 = React.useRef();

function addReview() {
fetch('http://192.168.1.74:3001/addReview', {
    method: 'PUT',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    },    
    body: new URLSearchParams({
      fromCity: fromCity,
      fromState: fromState,
      toCity: toCity,
      toState:toState,
      review: review,
      userID: '123'
    }).toString()
});
}

  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Travel Review!</Text>
      <View style={styles.line}>
        <Text style={styles.label}>From:</Text>
        <TextInput 
        style={styles.singleLineInput}
        onChangeText={text => onChangeFromCity(text)}
        value = { fromCity }
        placeholder='City'
        placeholderTextColor={'black'}
        autoFocus={true}
        returnKeyType="next"
        onSubmitEditing={() => ref_input2.current.focus()}
        /><Text>  ,  </Text>
        <TextInput 
        style={styles.singleLineInput}
        onChangeText={text => onChangeFromState(text)}
        value = { fromState }
        placeholder='State'
        placeholderTextColor={'black'}
        autoFocus={true}
        returnKeyType="next"
        onSubmitEditing={() => ref_input3.current.focus()}
        ref={ref_input2}
        />
      </View>
      <View style={styles.line}>
        <Text style={styles.label}>To:</Text>
        <TextInput 
        style={styles.singleLineInput}
        onChangeText={text => onChangeToCity(text)}
        value = { toCity }
        placeholder='City'
        placeholderTextColor={'black'}
        returnKeyType="next"
        onSubmitEditing={() => ref_input4.current.focus()}
        ref={ref_input3}
        />
        <Text>   ,   </Text>
        <TextInput 
        style={styles.singleLineInput}
        onChangeText={text => onChangeToState(text)}
        value = { toState }
        placeholder='State'
        placeholderTextColor={'black'}
        returnKeyType="next"
        onSubmitEditing={() => ref_input5.current.focus()}
        ref={ref_input4}
        />
      </View>

        <Text style={styles.label}>Review:</Text>
        <TextInput 
        style={styles.multiLineInput}
        onChangeText={text => onChangeReview(text)}
        value = { review }
        placeholder='Type your review'
        placeholderTextColor={'black'}
        multiline={true}
        textAlign='left'
        numberOfLines={5}
        ref={ref_input5}
        />
      <TouchableOpacity
      style={styles.postButton}
      onPress={addReview}>
        <Text
        style={styles.buttonText}>Post Review!</Text>
      </TouchableOpacity>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
    marginBottom: 15,
    color: 'black'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  singleLineInput: {
      backgroundColor: 'white',
      padding: 5,
      width: 125,
      marginBottom: 15,
      color: 'black'
  },
  multiLineInput: {
    backgroundColor: 'white',
    padding: 5,
    width: 350,
    marginBottom: 15,
    height: 150,
    color: 'black'
},
  label: {
      marginRight: 15,
      fontWeight: 'bold',
      fontSize: 25,
      color: 'black'
  },
  line: {
      flexDirection: 'row',
      color: 'black'
  },
  postButton: {
    backgroundColor: '#FFA69E',
    padding: 15,
    borderRadius: 15
  },
  buttonText: {
    fontSize: 22
  },

});



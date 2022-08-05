import { StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { Text, View, } from '../../components/Themed';
import Review from './interfaces'
import Navigation from '../../navigation';
import { useNavigation } from '@react-navigation/native';


export default function ReviewItem({fromCity, fromState, toCity, toState, userID, timeStamp, review}: Review) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
        onPress={()=> {
          navigation.navigate('OpenReview', {fromCity: fromCity, fromState: fromState, toCity: toCity, toState: toState, userID: userID, timeStamp: timeStamp, review: review})
        }}
      >
      <View style={styles.container}>
          <View style={styles.line}>
              <Text style={styles.label}>From:</Text><Text>{fromCity}, {fromState}</Text>
          </View>
          <View style={styles.line}>
              <Text style={styles.label}>To:</Text><Text>{toCity}, {toState}</Text>
          </View>
          <Text style={styles.label}>Review</Text>
          <Text style={styles.paragraph}>{review}</Text>
          <Text>{userID}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'80%',
    marginLeft:'10%',
    marginBottom:20,
    borderWidth:5,
    borderColor:'red',
    padding:5
  },
  paragraph: {

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



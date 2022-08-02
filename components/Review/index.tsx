import { StyleSheet, TextInput, Button } from 'react-native';
import * as React from 'react';
import { Text, View, } from '../../components/Themed';
import Review from './interfaces'



export default function ReviewItem({fromCity, fromState, toCity, toState, userID, timeStamp, review}: Review) {
  return (
    <View style={styles.container}>
        <View style={styles.line}>
            <Text style={styles.label}>From:</Text><Text>{fromCity}</Text>
        </View>
        <View style={styles.line}>
            <Text style={styles.label}>To:</Text><Text>{toCity}</Text>
        </View>
        <Text style={styles.label}>Review</Text>
        <Text style={styles.paragraph}>{review}</Text>
    </View>
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



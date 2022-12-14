import { StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { Text, View, } from '../../components/Themed';
import Review from './interfaces'
import Navigation from '../../navigation';
import { useNavigation } from '@react-navigation/native';


export default function ReviewItem({fromCity, fromState, toCity, toState, userID, timeStamp, review}: Review) {
  // const [userName, setUserName] = React.useState('')
  const navigation = useNavigation();

  // const url = ''
  // React.useEffect(()=> {
  // fetch(url+'/getUserNameById?userId='+userID)
  // .then((response)=>response.json())
  // .then((userNameResponse)=>setUserName(userNameResponse))}
  // ,[])


  return (
    <TouchableOpacity
        onPress={()=> {
          navigation.navigate('OpenReview', {fromCity: fromCity, fromState: fromState, toCity: toCity, toState: toState, userID: userID, timeStamp: timeStamp, review: review})
        }}
      >
      <View style={styles.container}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('OtherUserProfile')}
        >
          <Text style={styles.userName}>@{userID}</Text>
        </TouchableOpacity>
          <View style={styles.line}>
              <Text style={styles.label}>From:</Text><Text>{fromCity}, {fromState}</Text>
          </View>
          <View style={styles.line}>
              <Text style={styles.label}>To:</Text><Text>{toCity}, {toState}</Text>
          </View>
          <Text style={styles.label}>Review</Text>
          <Text style={styles.paragraph}>{review}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'90%',
    marginLeft:'5%',
    marginBottom:20,
    borderWidth:3,
    borderColor:'grey',
    borderRadius: 15,
    padding:15,
    backgroundColor: 'white'
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
    backgroundColor: 'white'
},
userName: {
  fontSize: 15,
  fontWeight: 'bold'
}
});



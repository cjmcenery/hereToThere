import { ScrollView, StyleSheet, Image, Pressable } from 'react-native';
import * as React from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ReviewItem from '../components/Review';
import Review from '../components/Review/interfaces';
import { Ionicons } from '@expo/vector-icons';
const ProfileImage = require('../assets/images/sean.png')


export default function OpenReviewScreen(reviewObj:any) {
  const item = reviewObj.route.params
  console.log(item)

  return (
      // <View style={styles.container}>
      //     <View style={styles.line}>
      //         <Text style={styles.label}>From:</Text><Text>{review.fromCity}, {review.fromState}</Text>
      //     </View>
      //     <View style={styles.line}>
      //         <Text style={styles.label}>To:</Text><Text>{review.toCity}, {review.toState}</Text>
      //     </View>
      //     <Text style={styles.label}>Review</Text>
      //     <Text style={styles.paragraph}>{review.review}</Text>
      //     <Text>{review.userID}</Text>
      // </View>
    <View style={styles.container}>
      <ReviewItem key={item._id} fromCity={item.fromCity} fromState={item.fromState} toCity={item.toCity} toState={item.toState} userID={item.userID} timeStamp={item.timeStamp} review={item.review}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFA69E',
    height: '100%',
    paddingTop: 150
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
},
backButton: {
  top: 30,
  left: 10,
},
backIcon: {
  width: 50,
  height: 50
}
});


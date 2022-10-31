import { ScrollView, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native';
import * as React from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ReviewItem from '../components/Review';
import Review from '../components/Review/interfaces';
import { Ionicons } from '@expo/vector-icons';
const ProfileImage = require('../assets/images/sean.png')


export default function FollowersScreen() {
const currentUserId = '123'
 const followersList = [
    {
        userName: 'cjmcenery',
        userId: '123',
        following: true
    },
    {
        userName: 'cjmcenery',
        userId: '1342323',
        following: false
    },
    {
        userName: 'cjmcenery',
        userId: '12234233',
        following: true
    },
    {
        userName: 'cjmcenery',
        userId: '123r233',
        following: false
    },
    {
        userName: 'cjmcenery',
        userId: '13',
        following: true
    }
 ]

 function isFollowing(item) {
    if (!item.following) {
        return (
            <TouchableOpacity 
            onPress={()=>followUser(currentUserId, item.userId)}
            style={styles.itemFollowButton}>
                    <Text style={styles.itemFollowButtonText}>Follow</Text>
            </TouchableOpacity>
        )
    }
 }

 //Makes an api call to add userIDToFollow to the list of users that ownUserID follows
 function followUser(ownUserID:string, userIDToFollow:string) {
fetch('http://192.168.1.74:3001/followUser?ownUserID='+ownUserID+'&userIDToFollow='+userIDToFollow)
    .catch((error)=>alert(error))
 }

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
      {followersList.map(item => {
        return (
        <TouchableOpacity 
        //onPress={()=>navigation.navigate('otherUserProfile', {userId: userId})}
        key={item.userId} 
        style={styles.followItem}>
                <Text style={styles.itemText}>{item.userName}</Text>
                {isFollowing(item)}
        </TouchableOpacity>
      )})}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  followItem: {
    backgroundColor: 'black',
    borderColor: 'grey',
    borderWidth: .5,
    borderRadius: 5,
    padding: 15,
    paddingLeft: 20,
    marginBottom: 5,
    flexDirection: 'row',
    height: 65
  },
  itemText: {
    fontSize: 22,
    color: 'white',
  },
  itemFollowButtonText: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 3
  },
  itemFollowButton: {
    marginLeft: 170,
    width: '25%',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5
  }
});


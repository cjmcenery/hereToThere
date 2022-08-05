import { ScrollView, StyleSheet, Image, Button, Pressable } from 'react-native';
import * as React from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ReviewItem from '../components/Review';
import { RootTabScreenProps } from '../types';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Ionicons } from '@expo/vector-icons'; 


export default function SettingsScreen({ navigation}: RootTabScreenProps<'Settings'>, emailObject:any) {
  // const [user, setUser] = React.useState([])
  // const email = emailObject.route.params.email
  // React.useEffect(()=> {fetch('http://192.168.1.74:3001/getUser?email='+email)
  // .then((response)=>response.json())
  // .then((json)=>setUser(json))
  // .catch((error)=>alert(error))}
  // , user)

  const user = [{
    firstName: 'Connor',
    lastName: 'McEnery',
    bio: 'My name is Connor',
    username: 'cjmcenery'
  }]

  const obj = user[0]
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    top: 20,
    left: 10,
  },
  backIcon: {
    width: 50,
    height: 50
  }
});

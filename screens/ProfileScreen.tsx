import { StyleSheet } from 'react-native';
import * as React from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function ProfileScreen() {

  const user = {
    firstName:'Connor',
    lastName: 'McEnery',
    emailAddress: 'cjm366@cornell.edu',
    age: 21,
    gender: 'male',
    city: 'Erie',
    State: 'PA',
    zip: '16509',
    bio: 'My name is Connor.'
  }

  return (
    <View style={styles.container}>
      <Text>{user.firstName}</Text>
      <Text>{user.lastName}</Text>
      <Text>{user.bio}</Text>
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

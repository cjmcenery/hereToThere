import { StyleSheet } from 'react-native';
import * as React from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function ProfileScreen(emailObject:any) {
  const [user, setUser] = React.useState([])
  const email = emailObject.route.params.email
  React.useEffect(()=> {fetch('http://192.168.1.74:3001/getUser?email='+email)
  .then((response)=>response.json())
  .then((json)=>setUser(json))
  .catch((error)=>alert(error))}
  , user)

  console.log(user[0])
  const obj = user[0]
  return (
    <View style={styles.container}>
      <Text>{obj.firstName}</Text>
      <Text>{obj.lastName}</Text>
      <Text>{obj.bio}</Text>
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

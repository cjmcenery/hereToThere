import { ScrollView, StyleSheet, Image, Button } from 'react-native';
import * as React from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ReviewItem from '../components/Review';
import { RootTabScreenProps } from '../types';
const ProfileImage = require('../assets/images/sean.png')


export default function ProfileScreen({ navigation}: RootTabScreenProps<'Profile'>, emailObject:any) {
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
    bio: 'My name is Connor. I am a 21 year old college student who enjoys the outdoors, cheaper restaurants, and going out with friends.',
    username: 'cjmcenery'
  }]

  let data = [
    {
      fromCity:'Erie',
      fromState: 'PA',
      toCity:'Ithaca',
      toState: 'NY',
      userID: '1534252352354',
      timeStamp: '1',
      review:'iewjf oiweiofnoiewhjfiwehfgiohweihfiohjigfhirehgiowehrgiohwerihgj owe gerg  erwg we rgernig jiwr ifghweoifhgoi wehofghweoihfiowheoifghjweg',
      _id: 1
    },
    {
      fromCity:'Erie',
      fromState: 'PA',
      toCity:'Pittsburgh',
      toState: 'PA',
      userID: '134134134314134',
      timeStamp: '1',
      review:'they  dfgio jifjiwdos feswjfi jeiowjf ioewjfijewijf ioewjf ijewi jfiew hgfihdsieg r gewrgfewripgji   orejgiwjniegjijwer r wekgmiorwnio ijirjgi jij ewr r  ',
      _id: 2
    },
    {
      fromCity:'Erie',
      fromState: 'PA',
      toCity:'Miami',
      toState: 'FL',
      userID: '134523532523',
      timeStamp: '1',
      review:'they  dfgio jifjiwdos feswjfi jwjfijewijf ioewjf ijewi jfiew hgfihdsiofghioewhfoiweh grwerg erwgergerg',
      _id: 3
    },
    {
      fromCity:'Erie',
      fromState: 'PA',
      toCity:'Cleveland',
      toState: 'Ohio',
      userID: '132523523',
      timeStamp: '1',
      review:'they  dfgio jifjiwdos feswjfi jeiosadfds  fdsf gdse fgdsfkhjsiwdfg jhokidhfio hdwsih gfiosdh ihgi hsdi ghiwjf ioewjfijewijf ioewjf ijewi jfiewrg ergerg  rw ger ber bre erher bb reb g b gfsfd ',
      _id: 4
    },
    {
      fromCity:'Erie',
      fromState: 'PA',
      toCity:'Boston',
      toState: 'MA',
      userID: '13243532523523',
      timeStamp: '1',
      review:'they  dfgio jifjsafsafsaiwdos feswjfi jeiowjf ioewjfijewijf ioewjf ijewi jfiew hgfihdsiofghioewhfoiweh ioh erg ergrew ggerd mmsdvn snv nu hur hi hvi hdfi i ijisjfijijvij ijrijf iijrigj iirjgijeri ijrij ij iirjigj ijrioghpoihgiorhjg iohfidhj vihfd ihrig ihrg ',
      _id: 5
    }
  ]

  const obj = user[0]
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.leftContainer}>
          <Image style={styles.profileImage} source={ProfileImage}></Image>
        </View>
        <View style={styles.rightContainer}>
          <Text>{obj.firstName}</Text>
          <Text>{obj.lastName}</Text>
          <Text>{obj.bio}</Text>
        </View>
      </View>
      <Text>My Reviews</Text>
      <ScrollView>
        {data.map(item => {
            return (<ReviewItem key={item._id} fromCity={item.fromCity} fromState={item.fromState} toCity={item.toCity} toState={item.toState} userID={item.userID} timeStamp={item.timeStamp} review={item.review}/>)
            })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    width: '100%'
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
  profileImage: {
    width: '60%',
    height: 120,
    marginTop: 20,
    marginLeft: '20%',
  },
  leftContainer: {
    width: '50%',
  },
  rightContainer: {
    width: '50%'
  }
});

import { StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import * as React from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ReviewItem from '../components/Review'
import Review from '../components/Review/interfaces'
import { get } from 'mongoose';
import { SearchBar } from 'react-native-screens';


interface ReviewProps {
  reviews: Review[]
}

type GetReviewsResponse = {
  data: Review[];
};


// const response = await fetch('localhost:3001/reviews', {
//         method: 'GET',
//         headers: {
//           Accept: 'application/json',
//         },
//       });

      // async function getReviews() {
      //   // try {
      //     // 👇️ const response: Response
      //     const response = await fetch('localhost:3001/reviews', {
      //       method: 'GET',
      //       headers: {
      //         Accept: 'application/json',
      //       },
      //     });
      //     //await console.log(response)
      //     if (!response.ok) {
      //       throw new Error(`Error! status: ${response.status}`);
      //     }
      
      //     // 👇️ const result: GetUsersResponse
      //     const result = (await response.json()) as Review[];
      //     //console.log('result is: ', JSON.stringify(result, null, 4));
      //     const reviews = result
      //     return reviews;
      //   }



export default function HomeScreen({ navigation}: RootTabScreenProps<'Home'>) {
  
  // React.useEffect(()=> {
  //   fetch('http://192.168.1.74:3001/getAllReviews')
  //   .then((response)=>response.json())
  //   .then((json)=>setData(json))
  //   .catch((error)=>alert(error))
  // })

  let reviews = [
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

  const [data, setData] = React.useState(reviews)
  const [fromCity, onChangeFromCity] = React.useState('');
  const [fromState, onChangeFromState] = React.useState('');
  const [toCity, onChangeToCity] = React.useState('');
  const [toState, onChangeToState] = React.useState('');


  function searchReviews() {
      // fetch('http://192.168.1.74:3001/getReviewsByCity?fromCity='+fromCity+'&fromState='+fromState+'&toCity='+toCity+'&toState='+toState)
      // .then((response)=>response.json())
      // .then((json)=>setData(json))
      // .catch((error)=>alert(error))
      setData([])
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.search}>
        <View style={styles.line}>
          <Text style={styles.label}>From:</Text>
        <TextInput 
          style={styles.searchText}
          onChangeText={text => onChangeFromCity(text)}
          value = { fromCity }
          placeholder='From City'
          placeholderTextColor={'black'}
          />
          </View>
          <View style={styles.line}>
          <Text style={styles.label}></Text>
          <TextInput 
          style={styles.searchText}
          onChangeText={text => onChangeFromState(text)}
          value = { fromState }
          placeholder='From State'
          placeholderTextColor={'black'}
          />
          </View>
          <View>
          <View style={styles.line}>
          <Text style={styles.label}>To:</Text>
          <TextInput 
          style={styles.searchText}
          onChangeText={text => onChangeToCity(text)}
          value = { toCity }
          placeholder='To City'
          placeholderTextColor={'black'}
          />
          </View>
          </View>
          <View style={styles.line}>
          <Text style={styles.label}></Text>
          <TextInput 
          style={styles.searchText}
          onChangeText={text => onChangeToState(text)}
          value = { toState }
          placeholder='To State'
          placeholderTextColor={'black'}
          />
          </View>
          <Button
        onPress={()=> setData([])}
        title='Search'
        color= 'blue'/>
      </View>
        {data.map(item => {
          return (<ReviewItem key={item._id} fromCity={item.fromCity} fromState={item.fromState} toCity={item.toCity} toState={item.toState} userID={item.userID} timeStamp={item.timeStamp} review={item.review}/>)
          })}
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA69E'
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
  search: {
    backgroundColor: '#A5FFD6',
    width: '90%',
    marginLeft: '5%',
    borderRadius: 10,
    marginBottom:10,
    marginTop: 10,
    borderColor: 'grey',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 3,
    padding: 15
  },
  searchText: {
    backgroundColor: 'white',
    width: "60%",
    marginLeft: '0%',
    fontSize: 20,
    marginTop: 10
  },
  line: {
      flexDirection: 'row',
      backgroundColor: '#A5FFD6'
  },
  label: {
    width: '20%',
    left: 0,
    fontWeight: 'bold',
    fontSize: 20,
    top: 10
  }
});

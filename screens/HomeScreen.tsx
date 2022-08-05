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
      fromCity:'1',
      fromState: '1',
      toCity:'2',
      toState: '1',
      userID: '1',
      timeStamp: '1',
      review:'they both suck',
      _id: 1
    },
    {
      fromCity:'1',
      fromState: '1',
      toCity:'2',
      toState: '1',
      userID: '1',
      timeStamp: '1',
      review:'they  dfgio jifjiwdos feswjfi jeiowjf ioewjfijewijf ioewjf ijewi jfiew hgfihdsiofghioewhfoiweh ioh suck',
      _id: 2
    },
    {
      fromCity:'1',
      fromState: '1',
      toCity:'2',
      toState: '1',
      userID: '1',
      timeStamp: '1',
      review:'they  dfgio jifjiwdos feswjfi jwjfijewijf ioewjf ijewi jfiew hgfihdsiofghioewhfoiweh ioh suck',
      _id: 3
    },
    {
      fromCity:'1',
      fromState: '1',
      toCity:'2',
      toState: '1',
      userID: '1',
      timeStamp: '1',
      review:'they  dfgio jifjiwdos feswjfi jeiosadfds  fdsf gdse fgdsfkhjsiwdfg jhokidhfio hdwsih gfiosdh ihgi hsdi ghiwjf ioewjfijewijf ioewjf ijewi jfiew hgfihdsiofghioewhfoiweh ioh suck',
      _id: 4
    },
    {
      fromCity:'1',
      fromState: '1',
      toCity:'2',
      toState: '1',
      userID: '1',
      timeStamp: '1',
      review:'they  dfgio jifjsafsafsaiwdos feswjfi jeiowjf ioewjfijewijf ioewjf ijewi jfiew hgfihdsiofghioewhfoiweh ioh suck',
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
    <ScrollView>
      <View style={styles.search}>
        <TextInput 
          style={styles.searchText}
          onChangeText={text => onChangeFromCity(text)}
          value = { fromCity }
          placeholder='From City'
          placeholderTextColor={'black'}
          />
          <TextInput 
          style={styles.searchText}
          onChangeText={text => onChangeFromState(text)}
          value = { fromState }
          placeholder='From State'
          placeholderTextColor={'black'}
          />
          <TextInput 
          style={styles.searchText}
          onChangeText={text => onChangeToCity(text)}
          value = { toCity }
          placeholder='To City'
          placeholderTextColor={'black'}
          />
          <TextInput 
          style={styles.searchText}
          onChangeText={text => onChangeToState(text)}
          value = { toState }
          placeholder='To State'
          placeholderTextColor={'black'}
          />
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
  search: {
    backgroundColor: 'grey',
    width: '90%',
    marginLeft: '5%',
    borderRadius: 10,
    marginBottom:10,
    marginTop: 10
  },
  searchText: {
    backgroundColor: 'white',
    width: "60%",
    marginLeft: '20%',
    fontSize: 20,
    marginTop: 10
  }
});

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import LogInScreen from './screens/LogInScreen'
import SignUpScreen from './screens/SignUpScreen'
// const { MongoClient } = require("mongodb");
// const connectionString = process.env.ATLAS_URI;
// const client = new MongoClient(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


// let dbConnection:any;


// client.connect(function (err:any, db:any) {
//   if (err || !db) {
//     return err;
//   }

//   dbConnection = db.db("users");
//   console.log("Successfully connected to MongoDB.");

//   return ;
// });


import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';




export default function App() {

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  

  // if (!isLoadingComplete) {
  //   return null;
  // } else {
  //   if (response?.type === 'success') {
  //     console.log(response)
  //     return <SignUpScreen/>
  //   } else{
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  
}

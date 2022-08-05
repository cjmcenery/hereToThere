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
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '257727206962-1dlkodv6t7u6ho1kqpuk90672b4sv5ju.apps.googleusercontent.com',
    iosClientId: '257727206962-fc1akit4mnk85iti0b5pmc48kp7594oa.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: '257727206962-1dlkodv6t7u6ho1kqpuk90672b4sv5ju.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      }
  }, [response]);



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

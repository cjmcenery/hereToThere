import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import LogInScreen from './screens/LogInScreen'
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




export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    if (false) {
      return <LogInScreen/>
    }
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

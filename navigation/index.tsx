/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Entypo, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import AddTravelScreen from '../screens/AddTravelScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import OpenReviewScreen from '../screens/OpenReviewScreen'
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons'; 
import FollowersScreen from '../screens/FollowersScreen';
import FollowingScreen from '../screens/FollowingScreen';
import OtherUserProfileScreen from '../screens/OtherUserProfileScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Root'>
      <Stack.Screen name="AuthNavigator" component={AuthNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }}  />
      <Stack.Screen name="OpenReview" component={OpenReviewScreen} options={{ title: 'Review', headerShown: true }}  />
      <Stack.Screen name="Followers" component={FollowersScreen} options={{ title: 'Followers', headerShown: true }}  />
      <Stack.Screen name="Following" component={FollowingScreen} options={{ title: 'Following', headerShown: true }}  />
      <Stack.Screen name="OtherUserProfile" component={OtherUserProfileScreen} options={{ title: 'Profile', headerShown: true }}  />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings', headerShown: true }}  />
    </Stack.Navigator>
  );
}

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName='LogIn'>
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LogIn" component={LogInScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Reviews',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="airplane-search" size={24} color="white" />
        })}
      />
      <BottomTab.Screen
        name="AddTravel"
        component={AddTravelScreen}
        options={{
          title: 'Post Review',
          tabBarIcon: ({ color }) => <Entypo name="squared-plus" size={24} color="white" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }: RootTabScreenProps<'Profile'>) => ({
          title: 'Profile',
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color="white" />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Settings')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                right: 10
              })}>
              <Ionicons name="ios-settings-outline" size={28} color="white" />
            </Pressable>
          )
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

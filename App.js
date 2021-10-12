import { StatusBar } from 'expo-status-bar';
import React, {useMemo, useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useFonts} from 'expo-font';
import { AuthContext } from './utils/context';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import { checkToken } from './utils/tokenManager';


const RootStack = createStackNavigator();

export default function App() {
  const [token, setToken] = useState(null)
  const [loadedToken, setLoadedToken] = useState(false)
  const [loaded] = useFonts({
    firaSansBold: require('./assets/fonts/FiraSans-ExtraBold.ttf'),
    merriweather: require('./assets/fonts/Merriweather-Regular.ttf')
  });

  const authContext = useMemo(() => ({
    setToken: setToken,
    token: token
  }))

  useEffect(() => {
    checkToken(setToken, setLoadedToken)
    }, [])

  if(!loaded || !loadedToken) {
    return <LoadingScreen/>
  }

  return(
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        {token == null ? (
          <RootStack.Navigator screenOptions={{
              tabBarShowLabel: false,
              headerShown: false,
          }}>
            <RootStack.Screen name="login" component={LoginScreen}/>
          </RootStack.Navigator>
        )
        :
        <RootStack.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
        }}>
        <RootStack.Screen name="loading" component={LoadingScreen}/>
      </RootStack.Navigator>
      }
      </AuthContext.Provider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

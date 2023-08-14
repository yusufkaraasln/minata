import React from 'react';

import { NavigationContainer, useNavigation } from '@react-navigation/native';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { setLogin } from './src/redux/slices/userSlice';

function App() {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.user);
  console.log('***');
  console.log(
    'async',
    AsyncStorage.getItem('isLoggedIn').then((res) => {
      console.log('res', res);
      return res;
    })
  );
  console.log('state', isLoggedIn);
  return <NavigationContainer>{isLoggedIn ? <AppStack /> : <AuthStack />}</NavigationContainer>;
}

export default App;

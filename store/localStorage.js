import { AsyncStorage } from 'react-native';

export const setStore = store => {
  console.log('sync store', store);

  return AsyncStorage.setItem('reduxStore', JSON.stringify(store));
};

export const getStore = () => {
  console.log('get from local store');
  return AsyncStorage.getItem('reduxStore').then(str => JSON.parse(str));
};

import R from 'ramda';
import { createAction, makeReducer } from '../lib/reduxUtil';

const initState = {
  contacts: [
    {
      _id: '-L6ck-kbmwLnjI2gTb5k',
      cardImageName: '1164e825-eecd-498f-8eb7-0daaac8efd36',
      comment: 'hello',
      createTime: 1520028355664,
      createdTimeStr: '2018-03-02T17:05:55-05:00',
      downloadURL:
        'https://firebasestorage.googleapis.com/v0/b/ehair-expo-dev.appspot.com/o/businessCards%2F1164e825-eecd-498f-8eb7-0daaac8efd36?alt=media&token=a5672e70-c14b-4117-aba5-f9e5a061855f',
      inStock: '',
      title: 'The first product',
      tagKeys: {}
    },
    {
      _id: '-L6cmNwfrrQa5uwoej4c',
      cardImageName: '',
      color: 'teal',
      comment: 'test',
      createTime: 1520028979028,
      createdTimeStr: '2018-03-02T17:16:19-05:00',
      downloadURL: '',
      inStock: '',
      lastUpdateTime: 1520029405109,
      lastUpdateTimeStr: '2018-03-02T17:23:25-05:00',
      name: 'second pro',
      tagKeySet: { world: true },
      tagKeys: {}
    },
    {
      _id: '-L6eF3gmf2lfERIXGUdV',
      cardImageName: '6d9eb3ae-3698-4d04-b259-e9fd366eaab6',
      color: 'purple',
      comment: 'Good products',
      createTime: 1520053537591,
      createdTimeStr: '2018-03-03T00:05:37-05:00',
      downloadURL:
        'https://firebasestorage.googleapis.com/v0/b/ehair-expo-dev.appspot.com/o/businessCards%2F6d9eb3ae-3698-4d04-b259-e9fd366eaab6?alt=media&token=88c845a6-b666-4c66-a3fc-685fa5bb1f9a',
      inStock: '',
      lastUpdateTime: 1520053861884,
      lastUpdateTimeStr: '2018-03-03T00:11:01-05:00',
      name: 'Hair extension',
      tagKeySet: '',
      tagKeys: {}
    },
    {
      _id: '-L6eFNuIH_4SJtXr2pDy',
      cardImageName: '',
      comment: 'Hello there',
      createTime: 1520053620379,
      createdTimeStr: '2018-03-03T00:07:00-05:00',
      downloadURL: '',
      inStock: 'Yes',
      name: 'Baiding',
      tagKeySet: '',
      tagKeys: {}
    },
    {
      _id: '-L6eGQcbVw9fidjhzhEX',
      cardImageName: '',
      comment: '',
      createTime: 1520053893679,
      createdTimeStr: '2018-03-03T00:11:33-05:00',
      downloadURL: '',
      inStock: '',
      name: 'HowAreYou',
      tagKeySet: '',
      tagKeys: {}
    },
    {
      _id: '-L6rqOVeU29uovlvyOoU',
      cardImageName: '',
      comment: 'daydayup',
      createTime: 1520281688153,
      createdTimeStr: '2018-03-05T15:28:08-05:00',
      downloadURL: '',
      inStock: '',
      name: 'goodgoodstudy',
      tagKeySet: '',
      tagKeys: {}
    },
    {
      _id: '-L6wsxl7KbNr1qjt_I8h',
      cardImageName: 'd331a785-a7b7-4b1c-ab03-4661eb8e6ad8',
      comment: 'hello',
      createTime: 1520366247025,
      createdTimeStr: '2018-03-06T14:57:27-05:00',
      downloadURL:
        'https://firebasestorage.googleapis.com/v0/b/ehair-expo-dev.appspot.com/o/businessCards%2Fd331a785-a7b7-4b1c-ab03-4661eb8e6ad8?alt=media&token=a7c6a328-ad98-408b-b302-0b444d62e824',
      inStock: '',
      name: '5a hairs is great',
      tagKeySet: '',
      tagKeys: {}
    }
  ],
  searchText: 'he'
};

export const CONTACTS_FETCHED = 'CONTACTS_FETCHED';
export const UPDATE_CONTACT_SEARCH = 'UPDATE_CONTACT_SEARCH';

export const contactsFetched = products =>
  createAction(CONTACTS_FETCHED, products);

export const updateContactSearch = search =>
  createAction(UPDATE_CONTACT_SEARCH, search);

const productsHandler = {
  [CONTACTS_FETCHED]: (state, { payload }) =>
    R.assoc('contacts', payload, state),
  [UPDATE_CONTACT_SEARCH]: (state, { payload }) =>
    R.assoc('searchText', payload, state)
};

export default makeReducer(initState, productsHandler);

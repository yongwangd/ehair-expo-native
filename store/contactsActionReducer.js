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
      lastUpdateTime: 1520391915869,
      lastUpdateTimeStr: '2018-03-06T22:05:15-05:00',
      name: 'I should have a name',
      tagKeySet: '',
      title: 'The first product',
      tagKeys: {}
    },
    {
      _id: '-L6cmNwfrrQa5uwoej4c',
      cardImageName: '',
      color: 'teal',
      comment:
        'Note that image sources required this way include size (width, height) info for the Image. If you need to scale the image dynamically',
      createTime: 1520028979028,
      createdTimeStr: '2018-03-02T17:16:19-05:00',
      downloadURL: '',
      inStock: '',
      lastUpdateTime: 1520373825317,
      lastUpdateTimeStr: '2018-03-06T17:03:45-05:00',
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
    },
    {
      _id: '-L6yE3ouqb5tvzAAMfPg',
      cardImageName: 'dafc6af2-6824-438e-9d63-d0282e1749bb',
      comment: 'what i want is what I have got',
      createTime: 1520388820314,
      createdTimeStr: '2018-03-06T21:13:40-05:00',
      downloadURL:
        'https://firebasestorage.googleapis.com/v0/b/ehair-expo-dev.appspot.com/o/businessCards%2Fdafc6af2-6824-438e-9d63-d0282e1749bb?alt=media&token=73ef88b7-f7be-415f-abe9-3fde7cc47dc9',
      inStock: '',
      name: 'Beautiful blonde hair',
      tagKeySet: { world: true },
      tagKeys: {}
    },
    {
      _id: '-L6yImSuHh3xtSJPkyX4',
      cardImageName: '2d5b010c-b961-41b3-9d65-6ad046e14f28',
      comment: 'hope you like it',
      createTime: 1520390055835,
      createdTimeStr: '2018-03-06T21:34:15-05:00',
      downloadURL:
        'https://firebasestorage.googleapis.com/v0/b/ehair-expo-dev.appspot.com/o/businessCards%2F2d5b010c-b961-41b3-9d65-6ad046e14f28?alt=media&token=d1f9edfd-3165-4311-a425-f323677c04f0',
      inStock: '',
      name: 'this is a new product',
      tagKeySet: '',
      tagKeys: {}
    },
    {
      _id: '-L6yLcKncTKcrsNseQIl',
      cardImageName: 'b28e5400-7709-4b44-8dae-d43007feea8f',
      comment:
        'More complex, multi-select example demonstrating PureComponent usage for perf optimization and avoiding bugs.\n\nBy binding th',
      createTime: 1520390800787,
      createdTimeStr: '2018-03-06T21:46:40-05:00',
      downloadURL:
        'https://firebasestorage.googleapis.com/v0/b/ehair-expo-dev.appspot.com/o/businessCards%2Fb28e5400-7709-4b44-8dae-d43007feea8f?alt=media&token=9153ba22-d9cc-4e6e-b8b0-031c39188a47',
      inStock: '',
      name: 'whataya want from me',
      tagKeySet: '',
      tagKeys: {}
    },
    {
      _id: '-L6yOOGatQBIScFa-Dpw',
      cardImageName: '4705f90d-d643-43de-b807-082c9022d150',
      comment:
        "ransfer {flex: 1} down the view stack can lead to errors here, which the element inspector makes easy to debug. Doesn't yet support other contained responders from blocking this scroll view from becoming the responder. <ScrollView> vs <FlatList> - which one to use? ScrollView simply renders all its react child ...",
      createTime: 1520391525511,
      createdTimeStr: '2018-03-06T21:58:45-05:00',
      downloadURL:
        'https://firebasestorage.googleapis.com/v0/b/ehair-expo-dev.appspot.com/o/businessCards%2F4705f90d-d643-43de-b807-082c9022d150?alt=media&token=facfcdcc-b86c-45ce-8903-f4875accb571',
      inStock: '',
      name: 'Do you really need a long name? THere you go',
      tagKeySet: '',
      tagKeys: {}
    },
    {
      _id: '-L6yPmWdMEhR3YYuTWPj',
      cardImageName: '',
      comment: 'hello 12th products',
      createTime: 1520391891081,
      createdTimeStr: '2018-03-06T22:04:51-05:00',
      downloadURL: '',
      inStock: '',
      name: 'There comes the 12th one',
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

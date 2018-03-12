import { createStore, applyMiddleware, combineReducers } from 'redux';
import { NetInfo } from 'react-native';
import logger from 'redux-logger';

import contactsActionReducer, {
  contactsFetched
} from './contactsActionReducer';
import { contactsList } from './contactsQuery';
import { contactTagList } from './tagsQuery';
import tagsReducer, { fetchTags } from './tagsActionReducer';
import appInfoReducer, {
  setConnectionInfo,
  setUserInfo
} from './appInfoActionReducer';
import { eventPayloadOfType$ } from 'rx-event';
import { USER_LOGIN } from './contants';

const rootReducer = combineReducers({
  contactChunk: contactsActionReducer,
  tagChunk: tagsReducer,
  appInfoChunk: appInfoReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

store.subscribe(st => console.info('store', st));

contactsList().subscribe(contacts => {
  console.log('contacts are', contacts);

  // TODO: Randomize inStock
  const visibleContacts = contacts.filter(c => !c.hide).map(c => ({
    ...c,
    inStock: Math.random() > 0.5
  }));

  store.dispatch(contactsFetched(visibleContacts));
});

contactTagList().subscribe(tags => {
  store.dispatch(fetchTags(tags));
});

eventPayloadOfType$(USER_LOGIN).subscribe(userInfo => {
  store.dispatch(setUserInfo(userInfo));
});

NetInfo.addEventListener('connectionChange', connectionInfo => {
  console.log('connection info', connectionInfo);
  store.dispatch(setConnectionInfo(connectionInfo));
});

export default store;

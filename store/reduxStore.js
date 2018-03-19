import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { ReplaySubject } from 'rxjs';
import logger from 'redux-logger';
import R from 'ramda';

import contactsActionReducer, {
  setAllSavedContacts
} from './contactsActionReducer';
import tagsReducer from './tagsActionReducer';
import appInfoReducer from './appInfoActionReducer';
import { setStore, getStore } from './localStorage';
import { emitEvent, eventOfTypes$ } from 'rx-event';

const rootReducer = combineReducers({
  contactChunk: contactsActionReducer,
  tagChunk: tagsReducer,
  appInfoChunk: appInfoReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

export const storeState$ = new ReplaySubject(1);
store.subscribe(() => storeState$.next(store.getState()));

const dehydrate = state => {
  const r = {
    contactChunk: {
      savedContactKeys: R.path(['contactChunk', 'savedContactKeys'], state)
    }
  };

  console.log('dehydrated', r);
  return r;
};

const LOCAL_STATE_FETCHED = 'LOCAL_STATE_FETCHED';

eventOfTypes$(LOCAL_STATE_FETCHED)
  .switchMapTo(storeState$.map(dehydrate))
  .delay(200)
  .subscribe(stateToPersist => {
    console.log('time to sync persist', stateToPersist);
    setStore(stateToPersist);
  });

getStore().then(persistedState => {
  console.log('persist state', persistedState);
  console.log('persist contact', persistedState.contactChunk.savedContactKeys);
  if (persistedState) {
    store.dispatch(
      setAllSavedContacts(persistedState.contactChunk.savedContactKeys)
    );
  }
  emitEvent(LOCAL_STATE_FETCHED, persistedState);
});

export default store;

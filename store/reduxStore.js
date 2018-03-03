import * as R from 'ramda';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import logger from 'redux-logger';
import { ReplaySubject } from 'rxjs';
import contactsActionReducer, {
  contactsFetched
} from './contactsActionReducer';
import { contactsList } from './contactsQuery';

const rootReducer = combineReducers({
  contacts: contactsActionReducer
});

const store = createStore(rootReducer, enhancers);

contactsList().subscribe(contacts => {
  console.log('contacts are', contacts);
  store.dispatch(contactsFetched(contacts));
});

export default store;

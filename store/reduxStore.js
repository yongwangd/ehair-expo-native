import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import logger from 'redux-logger';
import contactsActionReducer, {
  contactsFetched
} from './contactsActionReducer';
import { contactsList } from './contactsQuery';
import { contactTagList } from './tagsQuery';
import tagsReducer, { fetchTags } from './tagsActionReducer';

const rootReducer = combineReducers({
  contactChunk: contactsActionReducer,
  tagChunk: tagsReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

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

export default store;

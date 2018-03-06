import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import logger from "redux-logger";
import contactsActionReducer, {
  contactsFetched
} from "./contactsActionReducer";
import { contactsList } from "./contactsQuery";
import { contactTagList } from "./tagsQuery";
import tagsReducer, { fetchTags } from "./tagsActionReducer";

const rootReducer = combineReducers({
  contacts: contactsActionReducer,
  tags: tagsReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

contactsList().subscribe(contacts => {
  console.log("contacts are", contacts);
  store.dispatch(contactsFetched(contacts));
});

contactTagList().subscribe(tags => {
  store.dispatch(fetchTags(tags));
});

export default store;

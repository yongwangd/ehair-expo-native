import { eventPayloadOfType$ } from 'rx-event';
import { NetInfo } from 'react-native';

import { contactsFetched } from './contactsActionReducer';
import { contactsList } from './contactsQuery';
import { contactTagList } from './tagsQuery';
import { fetchTags } from './tagsActionReducer';
import { setUserInfo, setConnectionInfo } from './appInfoActionReducer';
import { USER_LOGIN } from './contants';
import store from './reduxStore';

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

// const Rx = require('rxjs/Rx');
import Rx from 'rxjs/Rx';
import { curry } from 'ramda';

const rxOn = (target, event) =>
  Rx.Observable.create(obs => {
    target.on(event, evt => {
      obs.next(evt);
    });
  });

const fireStream = ref => rxOn(ref, 'value').map(value => value.val() || {});

const fireArrayStream = ref =>
  fireStream(ref).map(data =>
    Object.entries(data || {}).map(([_id, value]) => ({
      _id,
      ...value
    }))
  );

// fireArrayStream('users/').subscribe(v => console.log(v));

const firePush = curry((ref, data) => {
  const newRecord = ref.push();
  newRecord.set({
    ...data
  });
  return newRecord;
});

const fireUpdate = curry((ref, data) => ref.set(data));

const fireRemoveById = curry((ref, _id) => ref.child(_id).remove());

const fireOnce = ref =>
  Rx.Observable.create(obs => {
    ref.once('value').then(data => {
      obs.next(data.val());
      obs.complete();
    });
  });

const fireNewItemFromNow = ref =>
  Rx.Observable.create(obs => {
    ref
      .orderByChild('timestamp')
      .startAt(Date.now())
      .on('child_added', snapshot => obs.next(snapshot.val()));
  });

const fireChildChanged = ref =>
  rxOn(ref, 'child_changed').map(value => value.val() || {});

const fireChildRemoved = ref =>
  rxOn(ref, 'child_removed').map(value => value.val() || {});

const fireArrayOnce = ref =>
  fireOnce(ref).map(data =>
    Object.entries(data).map(([_id, value]) => ({
      _id,
      ...value
    }))
  );

const fireUpdateById = curry((ref, _id, patch) => ref.child(_id).update(patch));

const fireRef = ref => ({
  stream: () => fireStream(ref),
  arrayStream: () => fireArrayStream(ref),
  once: () => fireOnce(ref),
  arrayOnce: () => fireArrayOnce(ref),
  push: firePush(ref),
  removeById: fireRemoveById(ref),
  updateById: fireUpdateById(ref),
  childAdded: () => fireNewItemFromNow(ref),
  childChanged: () => fireChildChanged(ref),
  childRemoved: () => fireChildRemoved(ref)
});

export { fireRef, fireStream, fireArrayStream, fireUpdate, fireRemoveById };

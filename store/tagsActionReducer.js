import R from 'ramda';

const initialState = {
  tags: [
    {
      _id: '-L6cj9Y67IGhF5P8S4Ee',
      key: 'Hello',
      label: 'Hello',
      parentTagSet: { world: true }
    },
    {
      _id: '-L6cnUocrOgz94ZZ-B3e',
      key: 'world',
      label: 'world',
      parentTagSet: { first: true }
    },
    { _id: '-L6cqIvSPdvqjHqad87J', key: 'single', label: 'single' },
    { _id: '-L6t9Za6ZHu65BjiV593', key: 'whereis', label: 'whereis' },
    {
      _id: '-L6t9a53bsZ2Dm_NR9K5',
      key: 'thelove',
      label: 'thelove',
      parentTagSet: { first: true }
    },
    { _id: '-L6tICPN5CewPTJLWV6W', key: 'first', label: 'first' },
    { _id: '-L6tICviLt_55iVWHMpK', key: 'second', label: 'second' },
    { _id: '-L6tIDNx7hCmBMWPs6NF', key: 'third', label: 'third' },
    {
      _id: '-L6tIDjRJVXW7SD02cqS',
      key: 'forth',
      label: 'forth',
      parentTagSet: { single: true }
    },
    {
      _id: '-L6tIEYntAslI8YDJQNq',
      key: 'fifth',
      label: 'fifth',
      parentTagSet: { second: true }
    },
    {
      _id: '-L6tIEyAqw781XDyVakM',
      key: 'sixth',
      label: 'sixth',
      parentTagSet: { third: true }
    },
    {
      _id: '-L6tIFREGftralR2cQoI',
      key: 'seventh',
      label: 'seventh',
      parentTagSet: { first: true }
    },
    {
      _id: '-L6tIGvb-gapGuAkn_GU',
      key: 'eighth',
      label: 'eighth',
      parentTagSet: { second: true }
    },
    {
      _id: '-L6tIHdAZPEmssMR4s1h',
      key: 'ninth',
      label: 'ninth',
      parentTagSet: { third: true }
    },
    { _id: '-L6tIHzJAxuJACLuaVZT', key: 'twnth', label: 'twnth' },
    {
      _id: '-L6tdyw5lmfuL1RJQ0VA',
      key: 'this_is_a_very_long_tag',
      label: 'this_is_a_very_long_tag'
    },
    {
      _id: '-L6te4GaWny1WJAeWlif',
      key: 'looks-like-that-tag-is-not-long-enough',
      label: 'looks-like-that-tag-is-not-long-enough'
    }
  ]
};

export const FETCH_TAGS = 'FETCH_TAGS';

export const fetchTags = payload => ({
  type: FETCH_TAGS,
  payload
});

const actionHandler = {
  [FETCH_TAGS]: (state, { payload }) => R.assoc('tags', payload, state)
};

const tagsReducer = (state = initialState, action) => {
  const handler = actionHandler[action.type];
  return handler ? handler(state, action) : state;
};

export default tagsReducer;

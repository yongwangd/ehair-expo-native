import React from 'react';
import R from 'ramda';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

const TagCmp = props => {
  const { onTagClick, tag, ...rest } = props;
  const { label } = tag;
  return <Button {...rest} onPress={() => onTagClick(tag)} title={label} />;
};

export const TagListCmp = props => {
  const { onTagClick, tags } = props;
  return (
    <View>
      {tags.map(tg => <TagCmp key={tg.key} tag={tg} onTagClick={onTagClick} />)}
    </View>
  );
};

// class TagList extends React.Component {
//   render() {
//     const { tags } = this.props;
//     console.log(tags, 'tagsss');
//     return (
//       <View>
//         <Text> Tag list CMP</Text>
//         <TagListCmp tags={tags} onTagClick={this.props.onTagClick} />
//       </View>
//     );
//   }
// }

// const mapProps = (state, ownProps) => {
//   const { parentTag } = ownProps;
//   console.log('own props', ownProps);
//   if (parentTag) {
//     // { tags: state.tags.filter(tg => tg.parentTagSet[parentTag.key]) };

//     return {
//       tags: state.tagChunk.tags.filter(R.path(['parentTagSet', parentTag.key]))
//     };
//   }
//   return {
//     tags: state.tagChunk.tags.filter(
//       tg => R.isNil(tg.parentTagSet) || R.isEmpty(tg.parentTagSet)
//     )
//   };
// };

// export default connect(mapProps)(TagList);

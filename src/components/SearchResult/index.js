import React from 'react';
import {FlatList} from 'react-native';
import ImageListItem from '../ImageListItem';
import styles from './styles';
const SearchResult = ({data, onPress}) => {
  return (
    <FlatList
      data={data}
      style={styles.listStyle}
      keyExtractor={({id}) => id}
      onReachedThreshold={0.8}
      renderItem={({item}) => {
        return <ImageListItem image={item} onPress={onPress} />;
      }}
    />
  );
};

export default SearchResult;

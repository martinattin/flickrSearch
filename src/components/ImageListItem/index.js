import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Avatar from '../Avatar';
const ImageListItem = ({image, onPress}) => {
  const url = `https://farm${image.farm}.staticflickr.com/${image.server}/${
    image.id
  }_${image.secret}.jpg`;
  return (
    <>
      <TouchableOpacity
        style={styles.listItemStyle}
        onPress={() => onPress({...image, url})}>
        <Avatar url={url} />
        <View style={styles.titleContainer}>
          <Text>{image.title}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.seperator} />
    </>
  );
};

export default ImageListItem;

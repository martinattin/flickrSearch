import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';

const Avatar = ({url}) => {
  return (
    <View style={styles.avatarContainer}>
      <FastImage
        style={styles.avatar}
        source={{
          uri: url,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export default Avatar;

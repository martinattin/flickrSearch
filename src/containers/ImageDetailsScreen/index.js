import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
const ImageDetailScreen = ({navigation, route}) => {
  const {image} = route.params;
  return (
    <View style={styles.containerStyle}>
      <Text>{image.title}</Text>
      <Image
        style={styles.detailedImageStyle}
        source={{
          uri: image.url,
        }}
      />
    </View>
  );
};

export default ImageDetailScreen;

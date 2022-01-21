import {StyleSheet, Platform, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
  },
  detailedImageStyle: {
    marginVertical: 20,
    height: height * 0.5,
    width: '90%',
  },
});

export default styles;

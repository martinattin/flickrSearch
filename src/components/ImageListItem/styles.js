import {StyleSheet, Platform} from 'react-native';
import {WHITE, COLOR_GREY} from '../../Constants/colors';
const styles = StyleSheet.create({
  listItemStyle: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: WHITE,
  },
  seperator: {height: 1, backgroundColor: COLOR_GREY},
  titleContainer: {
    marginLeft: 10,
    alignSelf: 'center',
  },
});

export default styles;

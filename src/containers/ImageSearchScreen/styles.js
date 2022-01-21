import {StyleSheet, Platform} from 'react-native';
import {BUTTON_COLOUR} from '../../Constants/colors';
const styles = StyleSheet.create({
  screenContainerStyle: {flex: 1, alignItems: 'center'},
  searchButtonStyle: {
    backgroundColor: BUTTON_COLOUR,
    marginVertical: 15,
    borderRadius: 10,
    padding: 5,
  },
  ActivityIndicator: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default styles;

import React, {useState} from 'react';
import {ActivityIndicator, Pressable, Text, View} from 'react-native';
import StyledTextInput from '../../components/StyledTextInput';
import styles from './styles';
import {IMAGE_DETAIL_SCREEN} from '../../Constants/screens';
import {searchImages} from './helpers';
import SearchResult from '../../components/SearchResult';
import {Strings} from '../../Constants/Strings';
const {searchImagesString, enterImageString} = Strings;
const ImageSearchScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [imageResult, setImageResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.screenContainerStyle}>
      <StyledTextInput
        autoFocus={true}
        placeholder={enterImageString}
        onChangeText={setSearchText}
        value={searchText}
      />
      <Pressable
        style={styles.searchButtonStyle}
        onPress={() => {
          setIsLoading(true);
          setSearchText('');
          imageResult && setImageResults([]);
          searchImages({searchText, setImageResults, setIsLoading});
        }}
        disabled={searchText.length == 0}>
        <Text>{searchImagesString}</Text>
      </Pressable>
      {!isLoading ? (
        <SearchResult
          data={imageResult}
          onPress={item => {
            setSearchText('');
            navigation.navigate(IMAGE_DETAIL_SCREEN, {image: item});
          }}
        />
      ) : (
        <View style={styles.ActivityIndicator}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
};

export default ImageSearchScreen;

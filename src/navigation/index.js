import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageSearchScreen from '../containers/ImageSearchScreen';
import ImageDetailsScreen from '../containers/ImageDetailsScreen';
import {IMAGE_SEARCH_SCREEN, IMAGE_DETAIL_SCREEN} from '../Constants/screens';
import {imageSearch, imageDetail} from '../Constants/Strings';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={IMAGE_SEARCH_SCREEN}
          component={ImageSearchScreen}
          options={{title: imageSearch}}
        />
        <Stack.Screen
          name={IMAGE_DETAIL_SCREEN}
          component={ImageDetailsScreen}
          options={{title: imageDetail}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

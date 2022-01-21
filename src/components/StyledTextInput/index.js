import React from 'react';
import {TextInput} from 'react-native';
import {parseString} from '../../Utils/helpers';
import Styles from './styles';
const StyledTextInput = ({
  placeholder = '',
  onChange = null,
  onChangeText = null,
  onKeyPress,
  onFocus,
  onBlur,
  isOTPBox = false,
  keyboardType = 'default',
  secureTextEntry = false,
  maxLength,
  defaultValue = '',
  multiline = false,
  numberOfLines = 1,
  value,
  autoFocus,
  onSubmitEditing,
  blurOnSubmit,
  returnKeyType,
  placeholderTextColor,
}) => {
  return (
    <TextInput
      editable={true}
      autoCapitalize="none"
      autoCorrect={false}
      value={parseString(value)}
      style={Styles.textInputContainer}
      placeholder={placeholder}
      placeholderTextColor={
        placeholderTextColor ? placeholderTextColor : 'grey'
      }
      onChange={onChange}
      onChangeText={onChangeText}
      onKeyPress={onKeyPress}
      maxLength={maxLength || 50}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      numberOfLines={numberOfLines}
      onFocus={onFocus}
      onBlur={onBlur}
      defaultValue={defaultValue}
      autoFocus={autoFocus}
      textContentType={isOTPBox ? 'oneTimeCode' : 'none'}
      onSubmitEditing={onSubmitEditing}
      blurOnSubmit={blurOnSubmit}
      returnKeyType={returnKeyType}
    />
  );
};

export default StyledTextInput;

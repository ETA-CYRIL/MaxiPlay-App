import colors from '@utils/colors';
import { FC } from 'react';
import {
  View,
  Text,
  TextInputProps,
  StyleSheet,
  TextInput,
} from 'react-native';

interface Props extends TextInputProps {}  // My Props interface has all the same properties as React Native’s built-in TextInputProps, but I can add more if I want.”

const AppInput: FC<Props> = props => {
  return (
    <TextInput
      {...props}
      // {...props} This is the spread operator. It takes all the properties (props) passed to my AppInput component and forwards them to the underlying TextInput.
      style={[styles.input, props.style]} // styles.input is my default style (border, height, color, etc.). props.style allows the parent component to override or extend the default style.
      placeholderTextColor={colors.CONTRAST}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: colors.SECONDARY,
    height: 45,
    borderRadius: 22.5,
    color: colors.CONTRAST,
    padding: 10,
  },
});

export default AppInput;

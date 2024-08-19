// UIText
import React from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';

interface UITextProps {
  onPress?: () => void;
  children?: any;
  title?: string;
  style?: StyleProp<TextStyle>;
}

const Txt = ({ children, style = {}, onPress, ...props }: UITextProps) => {
  return (
    <Text {...props} style={[ss.text, style]} onPress={onPress}>
      {children}
    </Text>
  );
};

const ss = StyleSheet.create({
  text: {
    color: 'rgb(255, 255, 255)',
    fontSize: 16,
    fontFamily: 'CallingCode',
  },
});

export default Txt;


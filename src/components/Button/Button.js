import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

console.log(styles)

const Button = ({text, onPress, color}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        color ? {...styles.button, backgroundColor: color} : styles.button
      }>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

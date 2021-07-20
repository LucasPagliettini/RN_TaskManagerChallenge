import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface CusromButtonInterface {
  text: string;
  onPress: () => void;
  color: string;
}

const CusromButton = (props: CusromButtonInterface) => {
  const { text, onPress, color } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        color ? { ...styles.button, backgroundColor: color } : styles.button
      }
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CusromButton;

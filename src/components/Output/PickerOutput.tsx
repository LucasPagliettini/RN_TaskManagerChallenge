import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { dateFormater, timeFormater24 } from '../../utils/UtilFunctions';
import Container from '../Container';
import styles from './styles';

type PikerType = {
  output: Date;
  onPress: () => void;
  mode: string;
};

const PickerOutput = ({ output, onPress, mode }: PikerType) => {
// It returns a string from the value of "output" and "mode" props.
  const defineOutputText = (): string => {
    if (output) {
      if (mode === 'date') return dateFormater(output);
      if (mode === 'time') return timeFormater24(output);
      return null;
    }
    return 'Select';
  };

  //  It returns an object with specific text style properties depending on having
  //  or not some value for "output" prop.
  const defineOutputTextStyle = () => {
    if (output) return styles.text;
    return { ...styles.text, ...styles.placeHolder };
  };

  //  It returns an icon Functional Component depending on "mode" prop value
  const defineOutputIcon = (): JSX.Element => {
    if (mode === 'time') {
      return (
        <Ionicons
          name="time-outline"
          size={24}
          color={styles.placeHolder.color}
        />
      );
    }
    if (mode === 'date') {
      return (
        <Ionicons
          name="md-calendar-sharp"
          size={24}
          color={styles.placeHolder.color}
        />
      );
    }
    return null;
  };

  return (
    <View onTouchStart={onPress}>
      <Container style={styles.localContainer}>
        <>
          <Text style={defineOutputTextStyle()}>{defineOutputText()}</Text>
          {defineOutputIcon()}
        </>
      </Container>
    </View>
  );
};

export default PickerOutput;

import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { dateFormater, timeFormater24 } from '../../Utils/UtilFunctions';
import styles from '../FormStyles/formStyles';

type PikerTypeProp = {
  output: Date;
  onPress: () => void;
  mode: string;
};

const PickerOutput = ({ output, onPress, mode }: PikerTypeProp) => {
  //  It returns a string from the value of "output" and "mode" props.
  const defineOutputText = (): string => {
    if (output) {
      if (mode === 'date') return dateFormater(output);
      if (mode === 'time') return timeFormater24(output);
      return null;
    }
    return 'Select';
  };

  const outputText = defineOutputText();

  //  It returns an object with specific text style properties depending on having
  //  or not some value for "output" prop.
  const defineOutputTextStyle = () => {
    if (output) return styles.textInput;
    return { ...styles.textInput, ...styles.placeHolder };
  };

  const outputTextStyle = defineOutputTextStyle();

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

  const auxIcon = defineOutputIcon();

  return (
    <View
      onTouchStart={onPress}
      style={{
        ...styles.container,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text style={outputTextStyle}>{outputText}</Text>
      {auxIcon}
    </View>
  );
};

export default PickerOutput;

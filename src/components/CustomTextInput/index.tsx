import React from 'react';
import { TextInput } from 'react-native';
import { IS_IOS } from '../../utils/UtilConstants';
import Container from '../Container';
import styles from './styles';

type InputPropsType = {
  placeholder: string;
  value: string;
  reciveTaskData: Function;
  edityngPropiety: string;
};

const CustomTextInput = (prop: InputPropsType) => {
  const {
    placeholder, value, reciveTaskData, edityngPropiety,
  } = prop;

  const handleOnchange = (text: string) => {
    reciveTaskData(edityngPropiety, text);
  };
  return (
    <Container>
      <TextInput
        style={IS_IOS ? { ...styles.text, marginTop: 15 } : styles.text}
        placeholder={placeholder}
        placeholderTextColor={styles.placeHolder.color}
        value={value}
        onChangeText={(text) => handleOnchange(text)}
      />
    </Container>
  );
};

export default CustomTextInput;

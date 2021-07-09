import React from "react";
import { Platform, TextInput as TInput, View } from "react-native";
import { styles } from "../FormStyles/formStyles";

type InputPropsType = {
  placeholder: string;
  value: string;
  reciveTaskData: Function;
  edityngPropiety: string;
};

const TextInput = ({
  placeholder,
  value,
  reciveTaskData,
  edityngPropiety,
}: InputPropsType) => {
  
  const defineCurrentStyle = () => {
    if (Platform.OS === "ios") return { ...styles.textInput, marginTop: 15 };
    else return { ...styles.textInput, marginTop: 10 };
  };

  const currentStyle = defineCurrentStyle();

  return (
    <View style={styles.container}>
      <TInput
        style={currentStyle}
        placeholder={placeholder}
        placeholderTextColor={styles.placeHolder.color}
        value={value}
        onChangeText={(text) => reciveTaskData(edityngPropiety, text)}
      />
    </View>
  );
};

export default TextInput;

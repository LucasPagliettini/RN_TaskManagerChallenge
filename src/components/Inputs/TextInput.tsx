import React from "react";
import { Platform, TextInput as TI, View } from "react-native";
import { styles } from "../FormStyles/formStyles";

type InputPropsType = {
  placeholder: string;
  value: string;
  reciveTaskData: Function;
  edityngPropiety: string;
};

const TextInput = (props: InputPropsType) => {
  const { placeholder, value, reciveTaskData, edityngPropiety } = props;

  return (
    <View style={styles.container}>
      <TI
        style={
          Platform.OS === "ios"
            ? { ...styles.textInput, marginTop: 15 }
            : { ...styles.textInput, marginTop: 10 }
        }
        placeholder={placeholder}
        placeholderTextColor={styles.placeHolder.color}
        value={value}
        onChangeText={(text) => reciveTaskData(edityngPropiety, text)}
      />
    </View>
  );
};

export default TextInput;

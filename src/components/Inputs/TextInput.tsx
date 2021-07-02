import React from "react";
import { TextInput as TI, View } from "react-native";
import { styles } from "../FormStyles/formStyles";

type InputPropsType = {
  placeholder: string, 
  value: string, 
  reciveTaskData: Function, 
  edityngPropiety: string
}

const TextInput = (props: InputPropsType) => {

  const { placeholder, value, reciveTaskData, edityngPropiety } = props
  
  return (
    <View style={styles.container}>
      <TI
        style={styles.textInput }
        placeholder={placeholder}
        placeholderTextColor={styles.placeHolder.color}
        value={value}
        onChangeText={(text) => reciveTaskData(edityngPropiety, text)}
        
      />
    </View>
  );
};

export default TextInput;

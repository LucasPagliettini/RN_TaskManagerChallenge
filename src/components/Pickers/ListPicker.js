import React, { useState } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker"; //npm install @react-native-picker/picker --save
import { styles } from "../FormStyles/formStyles";

const ListPicker = ({ itemsList, defaultItem, propiety, initialValue, reciveTaskData,  }) => {

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={initialValue}
        onValueChange={(itemValue) => reciveTaskData(propiety, itemValue)}
        mode="dialog"
      >
        <Picker.Item
          label={defaultItem}
          value="none"
          color={styles.placeHolder.color}
          enabled={false}
        />
        {itemsList.map((item, index) => (
          <Picker.Item key={index} label={item} value={item} color={styles.textInput.color} />
        ))}
      </Picker>
    </View>
  );
};

export default ListPicker;

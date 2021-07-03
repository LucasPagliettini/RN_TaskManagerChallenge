import React from "react";
import { Platform, View, } from "react-native";
import { Picker } from "@react-native-picker/picker"; //npm install @react-native-picker/picker --save
import { styles } from "../FormStyles/formStyles";

type ListPickerPropType = {
  itemsList: string[], 
  defaultItem: string, 
  propiety: string, 
  initialValue: string, 
  reciveTaskData: Function
}

const ListPicker = (prop: ListPickerPropType) => {

  const { itemsList, defaultItem, propiety, initialValue, reciveTaskData } = prop

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={initialValue}
        onValueChange={(itemValue) => reciveTaskData(propiety, itemValue)}
        mode="dialog"
        prompt={propiety.toUpperCase() + ' Options'}
        style={Platform.OS === 'ios' ? {height: 20} : null}
        itemStyle={{height: styles.container.height}}
      >
        <Picker.Item
          label={defaultItem}
          value="none"
          color={styles.placeHolder.color}
        />
        {itemsList.map((item, index) => (
          <Picker.Item key={index} label={item} value={item} color={styles.textInput.color} />
        ))}
      </Picker>
    </View>
  );
};

export default ListPicker;

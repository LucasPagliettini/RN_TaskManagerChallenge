import React from "react";
import { Platform, View } from "react-native";
import { Picker } from "@react-native-picker/picker"; //npm install @react-native-picker/picker --save
import { styles } from "../FormStyles/formStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type ListPickerPropType = {
  itemsList: string[];
  defaultItem: string;
  propiety: string;
  initialValue: string;
  reciveTaskData: Function;
};

const ListPicker = (prop: ListPickerPropType) => {
  const { itemsList, defaultItem, propiety, initialValue, reciveTaskData } =
    prop;

  return (
    <View
      style={
        Platform.OS === "ios"
          ? {
              ...styles.container,
              paddingHorizontal: 0,
              paddingRight: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }
          : {
              ...styles.container,
            }
      }
    >
      <Picker
        selectedValue={initialValue}
        onValueChange={(itemValue) => reciveTaskData(propiety, itemValue)}
        mode="dialog"
        prompt={propiety.toUpperCase() + " Options"}
        //style={Platform.OS === "ios" ? { width: '100%', /*height: 20*/ } : null}
        itemStyle={
          Platform.OS === "ios"
            ? {
                height: styles.container.height,
                fontSize: styles.textInput.fontSize,
                width: 310,
              }
            : {
                height: styles.container.height,
                fontSize: styles.textInput.fontSize,
              }
        }
      >
        <Picker.Item
          label={defaultItem}
          value="none"
          color={styles.placeHolder.color}
        />
        {itemsList.map((item, index) => (
          <Picker.Item
            key={index}
            label={item}
            value={item}
            color={styles.textInput.color}
          />
        ))}
      </Picker>
      {Platform.OS === "ios" ? (
        <MaterialCommunityIcons name="pan-vertical" size={40} color="black" />
      ) : null}
    </View>
  );
};

export default ListPicker;

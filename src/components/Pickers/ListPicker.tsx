import React from 'react';
import { Platform, View, ViewStyle } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker'; // to solve installing errors: npm install @react-native-picker/picker --save
import styles from '../FormStyles/formStyles';

type ListPickerPropType = {
  itemsList: string[];
  defaultItem: string;
  propiety: string;
  initialValue: string;
  reciveTaskData: Function;
};

const ListPicker = (prop: ListPickerPropType) => {
  const {
    itemsList, defaultItem, propiety, initialValue, reciveTaskData,
  } = prop;

  const defineCurrentContainerStyle = (): ViewStyle => {
    if (Platform.OS === 'ios') {
      return {
        ...styles.container,
        paddingHorizontal: 0,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      };
    }
    return styles.container;
  };

  const defineCurrentPickerItemStyle = () => {
    if (Platform.OS === 'ios') {
      return {
        height: styles.container.height,
        fontSize: styles.textInput.fontSize,
        width: 310,
      };
    }
    return {
      height: styles.container.height,
      fontSize: styles.textInput.fontSize,
    };
  };

  const currentContainerStyle = defineCurrentContainerStyle();
  const currentPickerStyle = defineCurrentPickerItemStyle();

  return (
    <View style={currentContainerStyle}>
      <Picker
        selectedValue={initialValue}
        onValueChange={(itemValue) => reciveTaskData(propiety, itemValue)}
        mode="dialog"
        prompt={`${propiety.toUpperCase()} Options`}
        itemStyle={currentPickerStyle}
      >
        <Picker.Item
          label={defaultItem}
          value="none"
          color={styles.placeHolder.color}
        />
        {itemsList.map((item, index) => (
          <Picker.Item
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            label={item}
            value={item}
            color={styles.textInput.color}
          />
        ))}
      </Picker>
      {Platform.OS === 'ios' ? (
        <MaterialCommunityIcons name="pan-vertical" size={40} color="black" />
      ) : null}
    </View>
  );
};

export default ListPicker;

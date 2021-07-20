import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker'; // to solve installing errors: npm install @react-native-picker/picker --save
import { IS_IOS } from '../../utils/UtilConstants';
import styles from './styles';
import Container from '../Container';

type ListPickerType = {
  itemsList: string[];
  defaultItem: string;
  propiety: string;
  initialValue: string;
  reciveTaskData: Function;
};

const ListPicker = (prop: ListPickerType) => {
  const {
    itemsList, defaultItem, propiety, initialValue, reciveTaskData,
  } = prop;

  return (
    <Container style={IS_IOS ? styles.containerIos : null}>
      <View>
        <Picker
          selectedValue={initialValue}
          onValueChange={(itemValue) => reciveTaskData(propiety, itemValue)}
          mode="dialog"
          prompt={`${propiety.toUpperCase()} Options`}
          itemStyle={IS_IOS ? { ...styles.pickerStyle, width: 310 } : styles.pickerStyle}
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
              color={styles.text.color}
            />
          ))}
        </Picker>
        {IS_IOS ? (
          <MaterialCommunityIcons name="pan-vertical" size={40} color="black" />
        ) : null}
      </View>
    </Container>
  );
};

export default ListPicker;

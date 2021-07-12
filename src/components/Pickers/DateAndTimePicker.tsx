import React from 'react';
import { View, Platform } from 'react-native';
//  npm install @react-native-community/datetimepicker --legacy-peer-deps
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { IPickerState } from '../../screens/AddTaskSreen';

type DateAndTimePickerTypeProp = {
  pickerState: IPickerState;
  setPickerState: Function;
  reciveTaskData: Function;
};

const DateAndTimePicker = (prop: DateAndTimePickerTypeProp) => {
  const { pickerState, setPickerState, reciveTaskData } = prop;

  const hidePicker = (): void => {
    setPickerState({ ...pickerState, show: false });
  };

  // It runs the "reciveTaskData" on the onChange Picker event with the selected date
  const confirm = (selectedDate: Date): void => {
    const currentDate = selectedDate;
    hidePicker();
    reciveTaskData(pickerState.propiety, currentDate);
  };

  const defineCurrentDate = (): Date => {
    if (pickerState.initialValue) {
      if (typeof pickerState.initialValue === 'object') {
        return pickerState.initialValue;
      }
      return null;
    }
    return new Date(Date.now());
  };

  const currentDate = defineCurrentDate();

  return (
    <View>
      <DateTimePickerModal
        testID="dateTimePicker"
        isVisible={pickerState.show}
        date={currentDate}
        mode={pickerState.mode}
        display={Platform.OS === 'android' ? 'default' : 'spinner'}
        onConfirm={confirm}
        onCancel={hidePicker}
        minimumDate={pickerState.mode === 'date' ? new Date(Date.now()) : null}
        isDarkModeEnabled={false}
      />
    </View>
  );
};

export default DateAndTimePicker;

import React from "react";
import { View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker"; //npm install @react-native-community/datetimepicker --legacy-peer-deps
import { IPickerState } from "../../screens/AddTaskSreen";

type DateAndTimePickerTypeProp = {
  pickerState: IPickerState;
  setPickerState: Function;
  reciveTaskData: Function;
};

const DateAndTimePicker = (prop: DateAndTimePickerTypeProp) => {
  const { pickerState, setPickerState, reciveTaskData } = prop;

  //It runs the "reciveTaskData" on the onChange Picker event with the selected date
  const onChange = (e: any, selectedDate: Date) : void => {
    setPickerState({ ...pickerState, show: Platform.OS === "ios" });
    const currentDate = selectedDate;
    if (currentDate) {
      reciveTaskData(pickerState.propiety, currentDate);
    }
  };

  return (
    <View>
      {pickerState.show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={
            pickerState.initialValue ?
               typeof pickerState.initialValue === 'object'?
                  pickerState.initialValue : null
              : new Date(Date.now())
          }
          mode={pickerState.mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          minimumDate={new Date(Date.now())}
        />
      )}
    </View>
  );
};

export default DateAndTimePicker;

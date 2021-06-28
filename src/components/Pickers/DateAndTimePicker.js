import React from "react";
import { View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker"; //npm install @react-native-community/datetimepicker --legacy-peer-deps

const DateAndTimePicker = ({
  pickerState,
  setPickerState,
  reciveTaskData,
}) => {

  const onChange = (e, selectedDate) => {
    setPickerState({...pickerState, show: Platform.OS === "ios"});
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
          value={pickerState.initialValue? pickerState.initialValue : new Date(Date.now())}
          mode={pickerState.mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateAndTimePicker;

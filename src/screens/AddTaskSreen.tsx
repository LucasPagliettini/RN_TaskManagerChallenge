/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Keyboard, View, ScrollView, Alert,
} from 'react-native';
// import Redux functionalities
import { useDispatch } from 'react-redux';
import {
  addTaskAction,
  persistStoreInLocalStorageAction,
} from '../redux/actions/taskActions';
// import own components
import DateAndTimePicker from '../components/Pickers/DateAndTimePicker';
import TextInput from '../components/Inputs/TextInput';
import ListPicker from '../components/Pickers/ListPicker';
import PickerOutput from '../components/Output/PickerOutput';
import LabelBox from '../components/LabelBox/LabelBox';
import Button from '../components/Button/Button';
// import CONSTANTS
import { remindOptions, repeatOptions } from '../Utils/UtilConstants';
// import UTIL Functions
import { isLaterTime, isPastDate, isToday } from '../Utils/UtilFunctions';

// CONSTANTS declaration to use in task object and internal functions
const TITLE = 'title';
const DEADLINE = 'deadline';
const STARTTIME = 'startTime';
const ENDTIME = 'endTime';
const REMIND = 'remind';
const REPEAT = 'repeat';
const COMPLETED = 'completed';
const ID = 'id';

// Task object interface
export interface ITask {
  [TITLE]: string;
  [DEADLINE]: Date;
  [STARTTIME]: Date;
  [ENDTIME]: Date;
  [REMIND]: string;
  [REPEAT]: string;
  [COMPLETED]: boolean;
  [ID]: number;
}

// eslint-disable-next-line no-shadow
export enum PickerMode {
  // eslint-disable-next-line no-unused-vars
  date = 'date',
  // eslint-disable-next-line no-unused-vars
  time = 'time',
}

// PickerState object Interface
export interface IPickerState {
  show: boolean;
  mode: PickerMode;
  propiety: string;
  initialValue: string | Date;
}

const AddTaskSreen = ({ navigation }) => {
  const initialTaskData: ITask = {
    [TITLE]: '',
    [DEADLINE]: null,
    [STARTTIME]: null,
    [ENDTIME]: null,
    [REMIND]: 'none',
    [REPEAT]: 'none',
    [COMPLETED]: false,
    [ID]: null,
  };

  const initialPickerState: IPickerState = {
    show: false,
    mode: PickerMode.date,
    propiety: null,
    initialValue: null,
  };

  const dispatch = useDispatch();

  const [taskData, setTaskData] = useState(initialTaskData);

  // Function that recives the name of a property and the new value
  // to update the Task Object
  const reciveTaskData = (propiety: string, value: any): void => {
    setTaskData({ ...taskData, [propiety]: value });
  };

  const [pickerState, setPickerState] = useState(initialPickerState);

  // Function that recives a mode ("date" or "time") to show DatePicker o TimePicker
  // after turning show property into true. It also recives the name of a property to work with.
  // It defines the the initialValue to show when the picker opens
  const activePicker = (paramMode: PickerMode, paramPropiety: string): void => {
    setPickerState({
      ...pickerState,
      show: true,
      mode: paramMode,
      propiety: paramPropiety,
      initialValue:
        paramPropiety === ENDTIME
        && taskData.startTime !== null
        && taskData.endTime === null
          ? taskData.startTime
          : taskData[paramPropiety],
    });
  };

  // It takes a Task object, assigns it a unique ID and dispatch the "add to store" action
  // together with the "persist in localStorage action"
  const createNewTask = (taskInfo: ITask): void => {
    const newTask: ITask = { ...taskInfo, id: Date.now() };
    dispatch(addTaskAction(newTask));
    dispatch(persistStoreInLocalStorageAction());
  };

  const resetForm = (): void => {
    setTaskData(initialTaskData);
  };
  // It checks if there is a defined value for each required fields and return a boolean
  const formCompleted = (): boolean => {
    if (
      taskData.title.trim() !== ''
      && taskData.deadline !== null
      && taskData.startTime !== null
      && taskData.endTime !== null
    ) {
      return true;
    }
    return false;
  };

  // It check if the defined Date is not past Date, and if it's current day checks if the
  // selected startTime is not past. Finally it checks if the selected endTime is correctly
  // "later" than startTime
  const formHasValidDates = (
    deadline: Date,
    startTime: Date,
    endTime: Date,
  ): boolean => {
    if (isPastDate(deadline)) {
      Alert.alert('Validating dates...', '"Deadline" must be future date!', [
        { text: 'OK' },
      ]);
      return false;
    }
    if (isToday(deadline)) {
      if (!isLaterTime(startTime, new Date())) {
        Alert.alert(
          'Validating dates...',
          '"Start Time" must be future date!',
          [{ text: 'OK' }],
        );
        return false;
      }
    }
    if (!isLaterTime(endTime, startTime)) {
      Alert.alert(
        'Validating dates...',
        '"End Time" must be later than "Start Time"!',
        [{ text: 'OK' }],
      );
      return false;
    }
    return true;
  };

  // It opens the modal messages depending on the results of validations. When passing validation,
  // the messages let the user decide whether to create a task or not, to stay in the form to create
  // another task or navigate to "Board Screen" (executing the corresponding functions). Otherwise
  // messages will tell the user what the problem is.
  const newTaskDialog = (taskInfo: ITask): void => {
    if (!formCompleted()) {
      Alert.alert('Creating new Task', 'Please fill all empty fields', [
        { text: 'OK' },
      ]);
    } else if (
      formHasValidDates(taskData.deadline, taskData.startTime, taskData.endTime)
    ) {
      Alert.alert(
        'Creating new Task',
        'Do you confirm to create a new task with this information?',
        [
          { text: 'Return' },
          {
            text: 'Confirm',
            onPress: () => {
              createNewTask(taskInfo);
              Alert.alert('Creating new Task', '¡You have added a new task!', [
                { text: 'Add another task', onPress: () => resetForm() },
                {
                  text: 'Go to Board',
                  onPress: () => navigation.navigate('Board'),
                },
              ]);
            },
          },
        ],
      );
    }
  };

  return (
    <View
      style={{ justifyContent: 'space-between', flex: 1 }}
      onTouchStart={() => Keyboard.dismiss()}
    >
      <ScrollView style={{ paddingHorizontal: 25 }}>
        <LabelBox label="Title">
          <TextInput
            placeholder="Define task title"
            value={taskData.title}
            reciveTaskData={reciveTaskData}
            edityngPropiety={TITLE}
          />
        </LabelBox>
        <LabelBox label="Deadline">
          <PickerOutput
            output={taskData.deadline}
            onPress={() => activePicker(PickerMode.date, DEADLINE)}
            mode={PickerMode.date}
          />
        </LabelBox>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <LabelBox label="Start Time" style={{ width: '48%' }}>
            <PickerOutput
              output={taskData.startTime}
              onPress={() => activePicker(PickerMode.time, STARTTIME)}
              mode={PickerMode.time}
            />
          </LabelBox>
          <LabelBox label="End Time" style={{ width: '48%' }}>
            <PickerOutput
              output={taskData.endTime}
              onPress={() => activePicker(PickerMode.time, ENDTIME)}
              mode={PickerMode.time}
            />
          </LabelBox>
        </View>
        <LabelBox label="Remind">
          <ListPicker
            itemsList={remindOptions}
            defaultItem="Don't remind"
            propiety={REMIND}
            initialValue={taskData.remind}
            reciveTaskData={reciveTaskData}
          />
        </LabelBox>
        <LabelBox label="Repeat">
          <ListPicker
            itemsList={repeatOptions}
            defaultItem="Don't repeat"
            propiety="repeat"
            initialValue={taskData.repeat}
            reciveTaskData={reciveTaskData}
          />
        </LabelBox>
        <DateAndTimePicker
          pickerState={pickerState}
          setPickerState={setPickerState}
          reciveTaskData={reciveTaskData}
        />
      </ScrollView>
      <Button
        text="Create new task"
        color="green"
        onPress={() => newTaskDialog(taskData)}
      />
    </View>
  );
};

export default AddTaskSreen;

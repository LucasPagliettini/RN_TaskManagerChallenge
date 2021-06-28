import React, { useState } from "react";
import { Keyboard, View, Alert } from "react-native";
//import Redux functionalities
import { useDispatch } from "react-redux";
import { addTaskAction, persistStoreInLocalStorageAction, readLocalStorageAction } from "../redux/actions/taskActions";
//import own components
import DateAndTimePicker from "../components/Pickers/DateAndTimePicker";
import TextInput from "../components/Inputs/TextInput";
import ListPicker from "../components/Pickers/ListPicker";
import PickerOutput from "../components/Output/PickerOutput";
import LabelBox from "../components/LabelBox/LabelBox";
import Button from "../components/Button/Button";
//import CONSTANTS
import { remindOptions, repeatOptions } from "../components/Utils/UtilConstants";
//import UTIL Functions
import {
  getData,
  isLaterTime,
  isPastDate,
  isToday,
} from "../components/Utils/UtilFunctions";
import { set } from "react-native-reanimated";


const TITLE = "title";
const DEADLINE = "deadline";
const STARTTIME = "startTime";
const ENDTIME = "endTime";
const REMIND = "remind";
const REPEAT = "repeat";
const COMPLETED = "completed";

const AddTaskSreen = ({navigation}) => {
  const initialTaskData = {
    [TITLE]: "",
    [DEADLINE]: "",
    [STARTTIME]: "",
    [ENDTIME]: "",
    [REMIND]: "none",
    [REPEAT]: "none",
    [COMPLETED]: false,
  };

  const initialPickerState = {
    show: false,
    mode: "default",
    propiety: "",
    initialValue: "",
  };

  const dispatch = useDispatch();

  const [taskData, setTaskData] = useState(initialTaskData);
  const reciveTaskData = (propiety, value) => {
    setTaskData({ ...taskData, [propiety]: value });
  };

  const [pickerState, setPickerState] = useState(initialPickerState);
  const activePicker = (mode, propiety) => {
    setPickerState({
      ...pickerState,
      show: true,
      mode: mode,
      propiety: propiety,
      initialValue:
        propiety === ENDTIME &&
        taskData.startTime !== "" &&
        taskData.endTime === ""
          ? taskData.startTime
          : taskData[propiety],
    });
  };



  const createNewTask = (taskInfo) => {
    const newTask = { ...taskInfo, id: Date.now() };
    dispatch(addTaskAction(newTask));
    dispatch(persistStoreInLocalStorageAction())
  };

  const resetForm = () => {
    setTaskData(initialTaskData);
  };

  const newTaskDialog = (taskInfo) => {
    if (!formCompleted()) {
      Alert.alert("Creating new Task", "Please fill all empty fields", [
        { text: "OK" },
      ]);
    } else if (formHasValidDates(taskData.deadline,taskData.startTime, taskData.endTime)) {
      Alert.alert(
        "Creating new Task",
        "Do you confirm to create a new task with this information?",
        [
          { text: "Return" },
          {
            text: "Confirm",
            onPress: () => {
              createNewTask(taskInfo);
              Alert.alert("Creating new Task", "¡You have added a new task!", [
                { text: "Add another task", onPress: () => resetForm() },
                {
                  text: "Go to Board",
                  onPress: () => navigation.navigate("Board"),
                },
              ]);
            },
          },
        ]
      );
    }
  };

  const formCompleted = () => {
    if (
      taskData.title.trim() !== "" &&
      taskData.deadline !== "" &&
      taskData.startTime !== "" &&
      taskData.endTime !== ""
    )
      return true;
    else return false;
  };


  const formHasValidDates = (deadline, startTime, endTime) => {
    if (isPastDate(deadline)) {
      Alert.alert("Validating dates...", '"Deadline" must be future date!', [
        { text: "OK" },
      ]);
      return false;
    }
    if (isToday(deadline)) {
      if (!isLaterTime(startTime, new Date())) {
        Alert.alert(
          "Validating dates...",
          '"Start Time" must be future date!',
          [{ text: "OK" }]
        );
        return false;
      }
    }
    if (!isLaterTime(endTime, startTime)) {
      Alert.alert(
        "Validating dates...",
        '"End Time" must be later than "Start Time"!',
        [{ text: "OK" }]
      );
      return false;
    }
    return true;
  };

  return (
    <View
      style={{ justifyContent: "space-between", flex: 1 }}
      onTouchStart={() => Keyboard.dismiss()}
    >
      <View style={{ paddingHorizontal: 25 }}>
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
            onPress={() => activePicker("date", DEADLINE)}
            mode={"date"}
            pickerState={pickerState}
          />
        </LabelBox>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <LabelBox label="Start Time" style={{ width: "48%" }}>
            <PickerOutput
              output={taskData.startTime}
              onPress={() => activePicker("time", STARTTIME)}
              mode={"time"}
            />
          </LabelBox>
          <LabelBox label="End Time" style={{ width: "48%" }}>
            <PickerOutput
              output={taskData.endTime}
              onPress={() => activePicker("time", ENDTIME)}
              mode={"time"}
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
            propiety={"repeat"}
            initialValue={taskData.repeat}
            reciveTaskData={reciveTaskData}
          />
        </LabelBox>
        <DateAndTimePicker
          pickerState={pickerState}
          setPickerState={setPickerState}
          reciveTaskData={reciveTaskData}
        />
      </View>
      <Button
        text="Create new task"
        color="green"
        onPress={() => newTaskDialog(taskData)}
      />
    </View>
  );
};

export default AddTaskSreen;

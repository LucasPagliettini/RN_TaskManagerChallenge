import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { persistStoreInLocalStorageAction, toogleCompletedAction } from "../../redux/actions/taskActions";
import { ITask } from '../../screens/AddTaskSreen'
import {CheckBox} from '../CheckBox'

type TaskPropType = {
  item: ITask
}

const Task = (prop: TaskPropType) => {

  const {item} = prop

    const dispatch = useDispatch()

    const changeCompletedState = () => {
      dispatch(toogleCompletedAction(item.id))
      dispatch(persistStoreInLocalStorageAction())
    }

    return (
 
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={item.completed}
            onValueChange={() => changeCompletedState()}
            color='green'
            size={25}
          />
          <Text style={styles.label}>{item.title}</Text>
        </View>

    );
  };
  
  const styles = StyleSheet.create({
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
      alignItems: 'center'
    },
    checkbox: {
      alignSelf: "center",

    },
    label: {
      margin: 8,
      fontSize: 18,
    },
  });
export default Task

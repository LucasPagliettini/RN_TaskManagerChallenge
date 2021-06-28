import React from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { persistStoreInLocalStorageAction, toogleCompletedAction } from "../../redux/actions/taskActions";

const Task = ({item}) => {

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
            style={styles.checkbox}
          />
          <Text style={styles.label}>{item.title}</Text>
        </View>

    );
  };
  
  const styles = StyleSheet.create({
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
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

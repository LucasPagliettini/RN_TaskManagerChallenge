import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BoardScreen from "../screens/BoardScreen";
import AddTaskSreen from "../screens/AddTaskSreen";
import NavButtonContainter from "../components/NavButtons/NavButtonContainter";
import { useDispatch } from "react-redux";
import getTaskListFromLocalStore from "../redux/actions/taskActions";


const Navigator = () => {

  const dispatch =  useDispatch()

  //It is a function that runs only once when the app starts. It dispatches the
  //action that reads the initial data from localStorage
  useEffect(() => {
    dispatch(getTaskListFromLocalStore())
  }, [])

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Board"
          component={BoardScreen}
          options={{
            headerTitle: "Board",
            headerRightContainerStyle: { marginHorizontal: 20},
            headerRight: () => (<NavButtonContainter />),
            
          }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTaskSreen}
          options={{ title: "Add task" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

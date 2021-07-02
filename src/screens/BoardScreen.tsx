import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import EmptyScreen from "./EmptyScreen";
import Button from "../components/Button/Button";
import AllTaskListSreen from "./TaskListSceens/AllTaskListSreen";
import CompletedTaskScreen from "./TaskListSceens/CompletedTaskScreen";
import UncompletedTaskScreen from "./TaskListSceens/UncompletedTaskScreen";

const BoardScreen = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();
  //const navigation = useNavigation();

  return (
    <>
      <Tab.Navigator
        tabBarPosition="top"
        tabBarOptions={{
          labelStyle: { fontSize: 14, textTransform: "capitalize",},
          tabStyle: { width: "auto", },
          style: { paddingHorizontal: 13, },
          indicatorStyle: { backgroundColor: "black", marginHorizontal: 13 },
        }}
      >
        <Tab.Screen name="All" component={AllTaskListSreen} />
        <Tab.Screen name="Completed" component={CompletedTaskScreen} />
        <Tab.Screen name="Uncompleted" component={UncompletedTaskScreen} />
        <Tab.Screen name="Favorite" component={EmptyScreen} />
      </Tab.Navigator>
      <Button text="Add new task" color="green" onPress={() => {navigation.navigate("AddTask")}} />
    </>
  );
};

export default BoardScreen;

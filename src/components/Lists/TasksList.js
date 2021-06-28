import React from "react";
import { FlatList } from "react-native";
import Task from "../Task/Task";

const TasksList = ({taskArray}) => {
  

  return (
      <FlatList
        data={taskArray}
        renderItem={({item}) => <Task key={item.id} item={item}/>}
        keyExtractor={(item) => item.id.toString()}
      />
  );
};

export default TasksList;

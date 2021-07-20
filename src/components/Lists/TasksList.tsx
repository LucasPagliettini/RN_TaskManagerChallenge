import React from 'react';
import { FlatList } from 'react-native';
import { ITask } from '../../screens/AddTaskSreen';
import Task from '../Task';

type TasklistType = {
  taskArray: ITask[];
};

// eslint-disable-next-line arrow-body-style
const TasksList = ({ taskArray }: TasklistType) => {
  return (
    <FlatList
      data={taskArray}
      renderItem={({ item }) => <Task key={item.id} item={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TasksList;

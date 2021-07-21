import React from 'react';
import { FlatList } from 'react-native';
import { ITask } from '../../screens/AddTaskSreen';
import Task from '../Task';

type TasklistType = {
  taskArray: ITask[];
};

const TasksList = ({ taskArray }: TasklistType) => (
  <FlatList
    data={taskArray}
    renderItem={({ item }) => <Task key={item.id} item={item} />}
    keyExtractor={(item) => item.id.toString()}
  />
);

export default TasksList;

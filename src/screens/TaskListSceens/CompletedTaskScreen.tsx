import React from 'react';
import { View } from 'react-native';
import TasksList from '../../components/Lists/TasksList';
import { useAppSelector } from '../../redux/store';
import styles from './styles';

const CompletedTaskScreen = () => {
  // It returns the whole task array from the store
  const taskArrayFromStore = useAppSelector((state) => state.taskReducer);

  // It returns a array with the uncompleted tasks
  const completedTaskArray = taskArrayFromStore?.filter(
    (item) => item.completed === true,
  );

  return (
    <View style={styles.container}>
      <TasksList taskArray={completedTaskArray} />
    </View>
  );
};

export default CompletedTaskScreen;

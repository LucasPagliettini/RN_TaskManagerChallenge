import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  persistStoreInLocalStorageAction,
  toogleCompletedAction,
} from '../../redux/actions/taskActions';
import { ITask } from '../../screens/AddTaskSreen';
import CheckBox from '../CheckBox';
import styles from './styles';

type TaskPropType = {
  item: ITask;
};

const Task = ({ item }: TaskPropType) => {
  const dispatch = useDispatch();

  const changeCompletedState = () => {
    dispatch(toogleCompletedAction(item.id));
    dispatch(persistStoreInLocalStorageAction());
  };

  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        value={item.completed}
        onValueChange={changeCompletedState}
        color="green"
        size={25}
      />
      <Text style={styles.label}>{item.title}</Text>
    </View>
  );
};

export default Task;

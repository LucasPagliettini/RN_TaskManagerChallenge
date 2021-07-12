import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import styles from './styles';
import {
  persistStoreInLocalStorageAction,
  resetTaskListAction,
} from '../../redux/actions/taskActions';

const NavNotifyButton = () => {
  const dispatch = useDispatch();

  const pressAction = () => {
    dispatch(resetTaskListAction());
    dispatch(persistStoreInLocalStorageAction());
  };

  return (
    <TouchableOpacity style={styles.button} onPress={pressAction}>
      <Ionicons name="ios-notifications-outline" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default NavNotifyButton;

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

// eslint-disable-next-line arrow-body-style
const NavSearchButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Ionicons name="search" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default NavSearchButton;

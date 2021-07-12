import React from 'react';
import { View } from 'react-native';
import NavMenuButton from './NavMenuButton';
import NavNotifyButton from './NavNotifyButton';
import NavSearchButton from './NavSearchButton';
import styles from './styles';

// eslint-disable-next-line arrow-body-style
const NavButtonContainter = () => {
  return (
    <View style={styles.buttonContainer}>
      <NavSearchButton />
      <NavNotifyButton />
      <NavMenuButton />
    </View>
  );
};

export default NavButtonContainter;

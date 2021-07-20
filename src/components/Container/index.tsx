import React from 'react';
import { View, ViewStyle } from 'react-native';
import styles from './styles';

type ContainerType = {
  children: JSX.Element;
  style?: ViewStyle;
};
const Container = ({ children, style }: ContainerType) => (
  <View style={{ ...style, ...styles.container }}>
    {children}
  </View>
);

export default Container;

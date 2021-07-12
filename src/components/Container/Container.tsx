import React from 'react';
import { ViewStyle, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type ContainerPropType = {
  children: JSX.Element;
  viewStyleProps: ViewStyle;
};

const Container = (prop: ContainerPropType) => {
  const { children, viewStyleProps } = prop;

  return (
    <View style={{ ...styles.container, ...viewStyleProps }}>{children}</View>
  );
};

export default Container;

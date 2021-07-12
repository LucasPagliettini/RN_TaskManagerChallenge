import React from 'react';
import { ViewStyle, View, Text } from 'react-native';
import styles from './styles';

type labelBoxPropType = {
  children: JSX.Element;
  label: string;
  // eslint-disable-next-line react/require-default-props
  style?: ViewStyle;
};

const LabelBox = ({
  children,
  label,
  style = { backgroundColor: 'wite' },
}: labelBoxPropType): JSX.Element => {
  const localContainerSyle = { ...style, ...styles.container };

  return (
    <View style={localContainerSyle}>
      <Text style={styles.text}>{label}</Text>
      {children}
    </View>
  );
};

export default LabelBox;

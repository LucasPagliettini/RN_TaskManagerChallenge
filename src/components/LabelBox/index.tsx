import * as React from 'react';
import { ViewStyle, View, Text } from 'react-native';
import styles from './styles';

type LabelBoxType = {
  children: JSX.Element;
  label: string;
  style?: ViewStyle;
};

const LabelBox = (props: LabelBoxType): JSX.Element => {
  const { children, label, style } = props;

  return (
    <View style={{ ...style, ...styles.container }}>
      <Text style={styles.text}>{label}</Text>
      {children}
    </View>
  );
};

LabelBox.defaultProps = {
  style: null,
};

export default LabelBox;

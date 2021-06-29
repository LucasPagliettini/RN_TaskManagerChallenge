import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

interface IButtonProps { text: string; onPress: () => void; color: string };


const Button = (props: IButtonProps) => {
  const { text, onPress, color } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        color ? { ...styles.button, backgroundColor: color } : styles.button
      }
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

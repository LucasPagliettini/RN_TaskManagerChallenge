import React, { useEffect, useState } from "react";
import { ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

type CheckBoxPropType = {
  size?: number;
  color?: string;
  onValueChange?: () => void;
  value?: boolean;
};
export const CheckBox = (prop: CheckBoxPropType): JSX.Element => {
  
  const { size = 20, color = "green", onValueChange, value } = prop;

  const [checked, setChecked] = useState(false);

  //If there is a value recived as a prop, it equals the "checked" state value to to the prop value
  const adjustStateWithRecivedValue = (): void => {
    if (value !== undefined && value !== checked) {
      setChecked(!checked);
    }
  };

  useEffect(() => {
    adjustStateWithRecivedValue();
  }, [value]);

  const unCheckedStyle: ViewStyle = {
    height: size,
    width: size,
    borderColor: color,
    borderWidth: 2,
    borderRadius: size / 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  };

  const checkedStyle: ViewStyle = {
    ...unCheckedStyle,
    backgroundColor: color,
  };

  //It sets de corresponding style acording to the state
  let currentStyle = checked ? checkedStyle : unCheckedStyle;

  //It toogle the checked state and runs the posible "onValueChange" recived as a prop
  const handleOnPress = () => {
    if (value === undefined) setChecked(!checked);
    if (onValueChange) onValueChange();
  };

  return (
    <TouchableOpacity style={currentStyle} onPress={handleOnPress}>
      <Ionicons
        name="checkmark-sharp"
        size={size + 2}
        style={{ margin: -4 }}
        color="white"
      />
    </TouchableOpacity>
  );
};

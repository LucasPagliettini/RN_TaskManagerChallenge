import React from "react";
import { View, Text } from "react-native";
import { styles } from "../FormStyles/formStyles";
import { dateFormater, timeFormater24 } from "../../Utils/UtilFunctions";
import { Ionicons } from "@expo/vector-icons";

type PikerTypeProp = {
  output: Date;
  onPress: () => void;
  mode: string;
};

const PickerOutput = (prop: PikerTypeProp) => {
  const { output, onPress, mode } = prop;

  //It returns a string from the value of "output" and "mode" props. 
  const defineOutputText = (): string => {
    if (output)
      if (mode === "date") return dateFormater(output);
      else if (mode === "time") return timeFormater24(output);
      else return null;
    else return "Select";
  };

  const outputText = defineOutputText();

  //It returns an object with specific text style properties depending on having 
  //or not some value for "output" prop.
  const defineOutputTextStyle = () =>
    output ? styles.textInput : { ...styles.textInput, ...styles.placeHolder };

  const outputTextStyle = defineOutputTextStyle();

  //It returns an icon Functional Component depending on "mode" prop value
  const defineOutputIcon = (): JSX.Element => {
    if (mode === "time")
      return (
        <Ionicons
          name="time-outline"
          size={24}
          color={styles.placeHolder.color}
        />
      );
    else if (mode === "date")
      return (
        <Ionicons
          name="md-calendar-sharp"
          size={24}
          color={styles.placeHolder.color}
        />
      );
    else return null;
  };

  const auxIcon = defineOutputIcon();

  return (
    <View
      onTouchStart={onPress}
      style={{
        ...styles.container,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text style={outputTextStyle}>{outputText}</Text>
      {auxIcon}
    </View>
  );
};

export default PickerOutput;

import React from "react";
import { View, Text } from "react-native";
import { styles } from "../FormStyles/formStyles";
import { dateFormater, timeFormater24 } from "../../Utils/UtilFunctions";
import { Ionicons } from "@expo/vector-icons";

const Output = ({ output, onPress, mode }) => {
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
      <Text
        style={
          output
            ? styles.textInput
            : { ...styles.textInput, ...styles.placeHolder }
        }
      >
        {output
          ? mode === "date"
            ? dateFormater(output)
            : mode === "time"
            ? timeFormater24(output)
            : null
          : "Select"}
      </Text>
      {mode === "time" ? (
        <Ionicons
          name="time-outline"
          size={24}
          color={styles.placeHolder.color}
        />
      ) : mode === "date" ? (
        <Ionicons
          name="md-calendar-sharp"
          size={24}
          color={styles.placeHolder.color}
        />
      ) : null}
    </View>
  );
};

export default Output;

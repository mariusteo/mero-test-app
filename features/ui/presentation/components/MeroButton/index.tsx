import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";

export const MeroButton: React.FC = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.content}>{text}</Text>
    </TouchableOpacity>
  )
}

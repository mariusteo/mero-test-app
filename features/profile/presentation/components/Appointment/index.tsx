import React from "react";
import {Text, View} from "react-native";
import {styles} from "./styles";
import hexToRgba from "hex-to-rgba";

export const Appointment: React.FC = ({appointment}) => {
  return (
    <View style={styles.container} key={appointment.title} >
      <View style={styles.statusContainer}>
        <Text style={{
          ...styles.statusText,
          color: appointment.status.color,
          backgroundColor: hexToRgba(appointment.status.color, 0.1)
        }}>{appointment.status.status}</Text>
        <View />
      </View>

      <Text style={styles.titleText}>{appointment.title}</Text>
      <Text style={styles.timeText}>{appointment.time}</Text>
    </View>
  )
}

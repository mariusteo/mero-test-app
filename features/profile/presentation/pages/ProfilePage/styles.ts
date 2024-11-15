import {StyleSheet} from "react-native";
import {white} from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:white
  },
  modalUpper: {
    flex: 2,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  modalLower: {
    flex: 1,
    backgroundColor: white
  }
});

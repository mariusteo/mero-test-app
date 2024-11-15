import {StyleSheet} from "react-native";
import {white} from "@/constants/Colors";

export const styles = StyleSheet.create({
  modalUpper: {
    flexGrow: 1,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  modalLower: {
    flexBasis:'auto',
    backgroundColor: white,
  }
});

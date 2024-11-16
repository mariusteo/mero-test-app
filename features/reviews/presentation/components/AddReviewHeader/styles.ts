import {StatusBar, StyleSheet} from "react-native";
import {white} from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: white,
    height: 50 + StatusBar.currentHeight,
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems:'center'
  },
  headerText: {
    height: 50,
    lineHeight: 50,
    fontSize:14,
    fontWeight:500
  },
  closeButton: {
    height: 25,
    width: 25
  },
  balancer:{
    height: 25,
    width: 25
  }
});

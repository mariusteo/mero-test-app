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
    alignItems: 'center',
    elevation: 5
  },
  headerText: {
    height: 50,
    lineHeight: 50,
    fontSize: 14,
    fontWeight: 500
  },
  closeButton: {
    height: 16,
    width: 16
  },
  balancer: {
    height: 16,
    width: 16
  }
});

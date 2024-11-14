import {StyleSheet} from "react-native";
import {blue, gray, white} from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    width: 223,
    height: 89,
    backgroundColor: white,
    margin: 5,
    borderRadius: 5,
    padding: 5,
    flex:1
  },
  statusContainer: {flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height:22
  },
  statusText: {
    textTransform: 'uppercase',
    padding: 3,
    borderRadius: 3,
    overflow: "hidden",
    maxWidth: '100%',
    fontSize: 12,
    fontWeight: 500,
    height: 22
  },
  titleText: {
    fontSize: 17,
    fontWeight: 500,
    marginBottom: 3
  },
  timeText: {
    fontSize: 14
  }

});

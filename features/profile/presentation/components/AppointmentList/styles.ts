import {StyleSheet} from "react-native";
import {blue, gray} from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    justifyContent: 'space-between'
  },
  textContainer: {
    width: 250,
    marginLeft: 0,
    overflow: "hidden"
  },
  image: {
    width: 58,
    height: 58,
    borderRadius: 29
  },
  title: {
    paddingHorizontal:15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer:{
    paddingHorizontal:15,
    flexDirection:'row',
  }

});

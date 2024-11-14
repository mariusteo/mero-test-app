import {StyleSheet} from "react-native";
import {blue, gray} from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  reviewContainer: {
    marginVertical: 5,
    flexDirection: "row",
    lineHeight: 20,
    alignItems: "center"
  },
  scoreText: {
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 3
  },
  reviewText: {
    color: blue,
  },
  addressText: {
    fontSize: 16,
    color: gray
  }
});

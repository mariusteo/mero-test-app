import {StyleSheet} from "react-native";
import {white} from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:white,
    paddingHorizontal:15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 20
  },
  score: {
    fontSize: 40,
    fontWeight: "bold",
  },
  reviews: {
    fontSize: 14,
    marginBottom: 10
  },
});

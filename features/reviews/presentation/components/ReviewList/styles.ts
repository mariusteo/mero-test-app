import {StyleSheet} from "react-native";
import {blue, lightBlueGray, lightLightGray} from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: lightLightGray,
    paddingHorizontal: 15,
    paddingBottom: 40
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
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25
  },
  textWrapper: {
    alignSelf: 'flex-start', // Ensures the wrapper only fits the text content width
  },
  buttonText: {
    color: blue,
    fontSize: 14,
    height: 30
  },
  buttonTextWithBackground: {
    color: blue,
    fontSize: 14,
    height: 43,
    lineHeight: 43,
    paddingHorizontal: 20,
    borderRadius: 22,
    backgroundColor: lightBlueGray,
    elevation:3
  }
});

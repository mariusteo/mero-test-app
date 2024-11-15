import {StyleSheet} from "react-native";
import {gray} from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    height: 300
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  descriptionText: {
    marginVertical: 5,
    fontSize: 16,
    color: gray
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  starTouchable: {
    flex: 1,
    alignItems: 'center'
  },
  starText: {
    marginTop: 5,
    flexWrap: 'nowrap',
    textAlign: "center",
    fontSize: 12
  },
  closeModalContainer: {
    marginVertical: 20,
    alignItems: 'center'
  },
  closeModalText: {
    color: gray,
    fontSize: 16,
    fontWeight: 500,
    textAlign:'center'
  }

});

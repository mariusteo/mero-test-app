import {StyleSheet} from "react-native";
import {black, gray, lightGray, white} from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    paddingBottom: 40
  },
  userContainer: {
    backgroundColor: white,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: "flex-start",

  },
  profileContainer: {
    width: 32,
    alignContent: 'center',

  },
  profileInitials: {
    height: 32,
    width: 32,
    backgroundColor: lightGray,
    borderRadius: 16,
    lineHeight: 32,
    textAlign: "center"
  },
  textContainer: {
    paddingLeft: 10,
    height: 40,
    lineHeight: 40
  },
  profileImage: {
    position: "absolute",
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    height: 32,
    lineHeight: 32
  },

  reviewText: {
    color: gray,
    fontSize: 14,
  },
  dateContainer: {
    marginTop: 10,
    alignItems: 'center'
  },
  dateText: {
    fontSize: 14,
    color: black,
    textAlign: 'center',
    marginBottom: 5
  },
  shopText: {
    color: gray
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    alignSelf: "center",
    marginBottom: 15
  },
  starImage: {
    height: 27,
    width: 27
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  descriptionText: {
    fontSize: 16,
  },
  textInput: {
    marginTop:10,
    borderStyle:'solid',
    borderWidth:1,
    borderColor:lightGray,
    fontSize:16,
    paddingHorizontal:10,
    borderRadius:3
  }

});

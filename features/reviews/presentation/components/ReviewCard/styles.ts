import {StyleSheet} from "react-native";
import {gray, lightGray, white} from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    marginVertical: 5,
    flexDirection: 'column',
    justifyContent: "flex-start",
    flex: 1,
    padding: 15,

    elevation: 3
  },
  reviewContainer: {
    backgroundColor: white,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: "flex-start",
    flex: 1,

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
    paddingLeft: 10
  },
  profileImage: {
    position: "absolute",
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 500
  },
  starsContainer: {
    flexDirection: "row",
    lineHeight: 20,
    alignItems: 'center'
  },
  reviewText: {
    color: gray,
    fontSize: 14,
  },
  myReviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height:30,
    alignItems:'center'
  },
  myReviewText:{
    fontSize:17,
    fontWeight: "bold",
    lineHeight:30
  },
  myReviewImage:{
    height:30,
    width:30,
    justifyContent:'center',
    alignItems:'center'
  }


});

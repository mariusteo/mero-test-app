import {StatusBar, StyleSheet} from "react-native";
import {white} from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: StatusBar.currentHeight + 50,
    flexDirection: 'row',
    backgroundColor: white,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 5
  },
  transparentContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: StatusBar.currentHeight + 50,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  leftContainer: {
    flexDirection: 'row',
  },
  title: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 500,
    textAlign: 'center'
  },
  favorites: {
    height: 42,
    width: 42,
    borderRadius: 21,
    marginRight: 5
  }
});

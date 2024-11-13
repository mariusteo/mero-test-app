import React from "react";
import {Animated, StatusBar} from "react-native";
import {white} from "@/constants/Colors";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export const Header: React.FC = ({animValue, title}) => {
  const insets = useSafeAreaInsets();

  const headerHeight = animValue.interpolate({
    inputRange: [0, 100 + insets.top],
    outputRange: [100 + insets.top, insets.top + 44],
    extrapolate: 'clamp'
  });
  const headerOpacity = animValue.interpolate({
    inputRange: [0, 100 + insets.top],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });

  return (<Animated.View style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: headerHeight,

    backgroundColor: white,
    opacity: headerOpacity,
    paddingTop: StatusBar.currentHeight,
    justifyContent:'center',
    alignItems:'center'
  }}>
    <Animated.Text style={{
      color: '#000000',
      opacity: headerOpacity
    }}>{title}</Animated.Text>
  </Animated.View>)
}

import {Animated} from "react-native";
import Value = Animated.Value;

export interface HeaderProps {
  animValue: Value,
  title: string,
  id: string,
}

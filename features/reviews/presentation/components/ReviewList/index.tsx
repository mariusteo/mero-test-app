import React, {useContext} from "react";
import {Text, View} from "react-native";
import {styles} from "./styles";
import {ReviewListProps} from "./ReviewListProps";
import {ProfileContext} from "@/features/profile/presentation/context/ProfileContext";

export const ReviewList: React.FC = (props:ReviewListProps) => {
  const {profile}=useContext(ProfileContext)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recenzii si Evaluari</Text>,
      <Text style={styles.score}>{Math.floor(profile.feedback.score * 10) / 10}</Text>
      <Text style={styles.reviews}>{profile.feedback.total} evaluari</Text>
    </View>

  )
}

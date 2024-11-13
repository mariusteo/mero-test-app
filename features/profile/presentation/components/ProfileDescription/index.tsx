import React from "react";
import {Text, View, Image} from "react-native";
import {styles} from "@/features/profile/presentation/components/ProfileCarousel/styles";

export const ProfileDescription: React.FC = ({title, score, reviews, address, profileImage}) => {
  return (
    <View>
      <View>
        <Text>{title}</Text>
        <View>
            <Text>{score}</Text>
            <Text>{reviews} evaluari</Text>
        </View>

        <Text>{address}</Text>
      </View>
      <Image source={{uri: profileImage}} style={styles.image}/>
    </View>
  )
}

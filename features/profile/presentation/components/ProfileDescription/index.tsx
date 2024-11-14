import React from "react";
import {Text, View, Image} from "react-native";
import {styles} from "./styles";

export const ProfileDescription: React.FC = ({title, score, reviews, address, profileImage}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.reviewContainer}>
          <Image source={require('@/assets/images/star.png')}/>
          <Text style={styles.scoreText}>{Math.floor(score * 100) / 100}</Text>
          <Text style={styles.reviewText}>({reviews} evaluari) </Text>
        </View>

        <Text style={styles.addressText}>{address}</Text>
      </View>
      <Image source={{uri: profileImage}} style={styles.image}/>
    </View>
  )
}

import React from "react";
import {Image, Text, View} from "react-native";
import {styles} from "./styles";

export const ReviewCard: React.FC = ({props}) => {
  const stars = []
  console.log('#### score', props.user?.profilePhoto?.small)
  for (let i = 0; i < 5; i++) {
    if(i<props.feedback.score){
      stars.push( <Image source={require('@/assets/images/small_star.png')}/>)
    }else{
      stars.push( <Image source={require('@/assets/images/small_star_empty.png')}/>)
    }
  }
  return (<View style={styles.container} key={props.user?.id}>
    <View style={styles.profileContainer}>
      <Text style={styles.profileInitials}>{props.user?.firstname.charAt()}{props.user?.lastname.charAt()}</Text>
      <Image style={styles.profileImage} source={{uri: props.user?.profilePhoto?.small}}/>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.nameText}>{props.user?.firstname} {props.user?.lastname}</Text>
      <View style={styles.starsContainer}>
        {stars}
        <Text> {props.feedback.score} din 5</Text>
      </View>
      <Text style={styles.reviewText}>{props.feedback.review}</Text>
    </View>
  </View>)
}

import React, {useContext} from "react";
import {styles} from "./styles";
import {Image, TouchableOpacity} from "react-native";
import {AddReviewContext} from "@/features/reviews/presentation/context/AddReviewContext";

export const Star: React.FC = ({image, position}) => {
  const {setScore} = useContext(AddReviewContext)
  return (
    <TouchableOpacity onPress={()=>{setScore(position)}}>
      <Image style={styles.starImage} source={image}/>
    </TouchableOpacity>
    )
}

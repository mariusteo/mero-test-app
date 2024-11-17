import React, {useContext} from "react";
import {Star} from "@/features/reviews/presentation/components/Star";
import {AddReviewContext} from "@/features/reviews/presentation/context/AddReviewContext";

export const StarSelector: React.FC = () => {
  const {score} = useContext(AddReviewContext)
  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < score) {
      stars.push(<Star position={i} image={require('@/assets/images/star_full.png')}/>)
    } else {
      stars.push(<Star position={i} image={require('@/assets/images/star_empty.png')}/>)
    }
  }
  return (<>{stars} </>)
}

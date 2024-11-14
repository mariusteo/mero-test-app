import {useEffect, useState} from "react";
import {getReviewsUseCase} from "@/features/reviews/domain/useCases/getReviewsUseCase";

export const useReviewList=({profileId})=>{
  const [reviewList, setReviewList] = useState()

  useEffect(() => {
    getReviewsUseCase({id:profileId, pageSize:5}).then((response) => {
      console.log('!!!', response)
      setReviewList(response.data)
    })
  }, []);

  return {reviewList};
}

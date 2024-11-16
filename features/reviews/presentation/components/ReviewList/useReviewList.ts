import {useCallback, useEffect, useState} from "react";
import {getReviewsUseCase} from "@/features/reviews/domain/useCases/getReviewsUseCase";
import {getReviewUseCase} from "@/features/reviews/domain/useCases/getReviewUseCase";
import {useFocusEffect} from "expo-router";
import {VisibleFeedbackDetails} from "@/features/reviews/domain/types/review";
import {useActionSheet} from "@expo/react-native-action-sheet";

export const useReviewList = ({profileId}) => {
  const [reviewList, setReviewList] = useState()
  const [ownReview, setOwnReview] = useState<VisibleFeedbackDetails>()

  useEffect(() => {
    getReviewsUseCase({id: profileId, pageSize: 5}).then((response) => {
      setReviewList(response.data)
    })
  }, []);
  useFocusEffect(
    useCallback(() => {
      getReviewsUseCase({id: profileId, pageSize: 5}).then((response) => {
        setReviewList(response.data)
      })
      getReviewUseCase().then((result) => {
        setOwnReview(result)
      })
    }, [])
  )

  return {reviewList, ownReview};
}

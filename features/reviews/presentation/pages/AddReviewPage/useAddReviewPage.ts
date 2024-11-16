import {useEffect, useState} from "react";
import {router, useLocalSearchParams} from "expo-router";
import {addReviewUseCase} from "@/features/reviews/domain/useCases/addReviewUseCase";

export const useAddReviewPage = () => {
  const params = useLocalSearchParams();
  const currentDate = new Date();
  const [score, setScore] = useState(1)

  const [review, setReview] = useState('')
  useEffect(() => {
    setScore(Number(params.selection))
  }, []);

  const saveReview = () => {
    addReviewUseCase({score: score.toString(), review})
    router.back()
  }

  return {currentDate, score, setScore, shopName: params.shopName, setReview, saveReview}
}

import {useCallback, useEffect, useState} from "react";
import {getReviewsUseCase} from "@/features/reviews/domain/useCases/getReviewsUseCase";
import {VisibleFeedbackDetails} from "@/features/reviews/domain/types/review";
import {getReviewUseCase} from "@/features/reviews/domain/useCases/getReviewUseCase";
import {PageProfile} from "@/features/profile/domain/types/profile";
import {getProfileUseCase} from "@/features/profile/domain/useCase/getProfileUseCase";
import {useFocusEffect} from "expo-router";

export const useReviewsPage = () => {
  const [reviewList, setReviewList] = useState()
  const [profile, setProfile] = useState<PageProfile>()
  const [ownReview, setOwnReview] = useState<VisibleFeedbackDetails>()
  useEffect(() => {
    getReviewUseCase().then((result) => {
      setOwnReview(result)
    })
    getProfileUseCase({slug: 'one-barbershop'}).then((response) => {
      setProfile(response.data)
    })
  }, []);

  useEffect(() => {
    getReviewsUseCase({id: profile?._id, pageSize: 5, next:null}).then((response) => {
      setReviewList(response.data)
    })
  }, [profile]);

  useFocusEffect(
    useCallback(() => {
      getReviewsUseCase({id: profile?._id, pageSize: 5, next:null}).then((response) => {
        setReviewList(response.data)
      })
      getReviewUseCase().then((result) => {
        setOwnReview(result)
      })
    }, [])
  )

  const fetchNew = () => {
    getReviewsUseCase({id: profile?._id, pageSize: 5, next: reviewList?.next}).then((response) => {
      const newList = reviewList.data.concat(response.data.data)
      setReviewList({data: newList, next: response.data.next})
    })
  }
  return {reviewList, ownReview, setOwnReview, profile, fetchNew}
}

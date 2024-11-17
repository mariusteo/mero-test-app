import {fetchReviews} from "@/features/reviews/data/remote/fetchReviews";

export const getReviewsUseCase=({id, pageSize, next})=>{
  return fetchReviews({id, pageSize, next})
}

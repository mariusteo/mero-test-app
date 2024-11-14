import {fetchReviews} from "@/features/reviews/data/remote/fetchReviews";

export const getReviewsUseCase=({id, pageSize})=>{
  return fetchReviews({id, pageSize})
}

import {addReviewScore} from "@/features/reviews/data/local/addReviewScore";
import {addReviewText} from "@/features/reviews/data/local/addReviewText";

export const addReviewUseCase=({score, review})=>{
  addReviewScore(score)
  addReviewText(review)
}

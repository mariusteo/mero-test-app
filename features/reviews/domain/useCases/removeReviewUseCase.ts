import {removeReviewScore} from "@/features/reviews/data/local/removeReviewScore";
import {removeReviewText} from "@/features/reviews/data/local/removeReviewText";

export const removeReviewUseCase=()=>{
  removeReviewScore()
  removeReviewText()
}

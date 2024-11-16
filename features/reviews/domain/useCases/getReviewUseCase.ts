import {addReviewScore} from "@/features/reviews/data/local/addReviewScore";
import {addReviewText} from "@/features/reviews/data/local/addReviewText";
import {getReviewScore} from "@/features/reviews/data/local/getReviewScore";
import {getReviewText} from "@/features/reviews/data/local/getReviewText";
import {ProfileImage} from "@/features/profile/domain/types/profile";

export const getReviewUseCase = async () => {
  const score = await getReviewScore()
  const review = await getReviewText()

  return score ? {
    _id: '123',
    isAnonymous: false,
    user: {
      firstname: 'Marius',
      lastname: 'Teo',
      profilePhoto: {
        _id: '456',
        thumbnail: '',
        small: '',
        medium: '',
        large: '',
      }
    },
    feedback: {
      score,
      review
    }
  } : null
}

import {ProfileImage} from "@/features/profile/domain/types/profile";

export type PageReviews = {
  data: PublicFeedbackDetails[]
  next?: string
}

type AnonymousFeedbackDetails = {
  _id: string
  isAnonymous: true
  feedback: {
    score: number
    review?: string
  }
}

export type VisibleFeedbackDetails = {
  _id: string
  isAnonymous?: false
  user: {
    firstname?: string
    lastname?: string
    profilePhoto?: ProfileImage
  }
  feedback: {
    score: number
    review?: string
  }
}

export type PublicFeedbackDetails = AnonymousFeedbackDetails | VisibleFeedbackDetails

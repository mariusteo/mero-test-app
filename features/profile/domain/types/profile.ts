export type PageProfile = {
  _id: string
  slug: string
  name: string
  phoneNo: string
  location: PageLocation
  description: string
  profilePhoto: ProfileImage
  images: PageImage[]
  feedback: {
    score: number
    total: number
  }
  hideReviews?: boolean
}

type ProfileImage = {
  _id: string
  thumbnail: string
  small: string
  medium: string
  large: string
}

type PageLocation = {
  city: string
  address: string
  long: number
  lat: number
  extraInfo?: string
  district?: string
  area?: string
}

type PageImage = {
  _id: string
  croppedSmall: string
  croppedLarge: string
  small: string
  medium: string
  large: string
}

type PageReviews = {
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

type VisibleFeedbackDetails = {
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

type PublicFeedbackDetails = AnonymousFeedbackDetails | VisibleFeedbackDetails

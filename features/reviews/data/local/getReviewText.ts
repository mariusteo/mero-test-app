import AsyncStorage from "@react-native-async-storage/async-storage";

export const getReviewText=()=>{
  return AsyncStorage.getItem(`review-text`)
}

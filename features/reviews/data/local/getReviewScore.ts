import AsyncStorage from "@react-native-async-storage/async-storage";

export const getReviewScore=()=>{
  return AsyncStorage.getItem('review-score')
}

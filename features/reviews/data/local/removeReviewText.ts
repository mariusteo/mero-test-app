import AsyncStorage from "@react-native-async-storage/async-storage";

export const removeReviewText = () => {
  AsyncStorage.removeItem(`review-text`)
}

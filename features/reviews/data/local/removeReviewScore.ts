import AsyncStorage from "@react-native-async-storage/async-storage";

export const removeReviewScore = () => {
  AsyncStorage.removeItem(`review-score`)
}

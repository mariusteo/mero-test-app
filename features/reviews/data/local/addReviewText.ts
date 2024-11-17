import AsyncStorage from "@react-native-async-storage/async-storage";

export const addReviewText= async (review) => {
  try {
    await AsyncStorage.setItem(
      `review-text`,
      review?? '',
    );
  } catch (error) {
    console.log('error', error)
  }
}

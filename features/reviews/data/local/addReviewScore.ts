import AsyncStorage from "@react-native-async-storage/async-storage";

export const addReviewScore= async (score)=>{
  try {
    await AsyncStorage.setItem(
      `review-score`,
      score,
    );
  } catch (error) {
    console.log('error', error)
  }
}

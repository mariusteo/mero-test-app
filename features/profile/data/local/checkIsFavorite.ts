import AsyncStorage from "@react-native-async-storage/async-storage";

export const checkIsFavorite = async (id: string) => {
 return AsyncStorage.getItem(`favorite-${id}`,)
}

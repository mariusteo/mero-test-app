import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveAsFavorite = async (id: string, value: boolean) => {
  try {
    await AsyncStorage.setItem(
      `favorite-${id}`,
      value ? 'true' : 'false',
    );
  } catch (error) {
    // Error saving data
  }
}

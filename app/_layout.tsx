import {Stack} from "expo-router";
import {ReviewHeader} from "@/features/reviews/presentation/components/ReviewHeader";
import {ActionSheetProvider} from "@expo/react-native-action-sheet";

export default function RootLayout() {
  return <>
    <ActionSheetProvider>
      <Stack options={{headerShown: false}}>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="profile" options={{headerShown: false}}/>
        <Stack.Screen name="reviews" options={{headerShown: false}}/>
        <Stack.Screen name="add-review"
                      options={{headerShown: true, header: () => <ReviewHeader title={'Descrie experienta ta'}/>}}/>
      </Stack>
    </ActionSheetProvider>
  </>
}

import {Stack} from "expo-router";

export default function RootLayout() {
  return <>
    <Stack options={{headerShown: false}}>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="profile" options={{headerShown: false}}/>
      <Stack.Screen name="add-review" options={{headerShown: true}}/>
    </Stack>
  </>
}

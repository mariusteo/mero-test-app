import {OtherPage} from "@/features/otherFeature/presentation/pages/OtherPage";
import {useEffect} from "react";
import {useNavigation} from "expo-router";
import {StatusBar} from "expo-status-bar";

const HomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  return (<>
    <StatusBar style="dark" />
    <OtherPage/>
  </>)
}

export default HomeScreen;

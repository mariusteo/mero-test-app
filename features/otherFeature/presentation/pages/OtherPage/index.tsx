import {SafeAreaView} from "react-native";
import React from "react";
import {styles} from "./styles";
import { router } from 'expo-router';
import {MeroButton} from "@/features/ui/presentation/components/MeroButton";

export const OtherPage: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MeroButton onPress={()=>{router.replace('profile')}} />
    </SafeAreaView>
  )
}

import React from "react";
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {router} from "expo-router";

export const ReviewHeader: React.FC = ({title}) => {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.balancer} />
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity onPress={router.back}>
        <Image source={require('@/assets/images/close.png')} style={styles.closeButton}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

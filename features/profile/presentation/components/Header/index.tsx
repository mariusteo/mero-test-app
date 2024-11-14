import React from "react";
import {Animated, Image, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {router} from 'expo-router';
import {styles} from "./styles";
import {addToFavoritesUseCase} from "@/features/profile/domain/useCase/addToFavoritesUseCase";
import {HeaderProps} from "@/features/profile/presentation/components/Header/HeaderProps";
import {useHeader} from "@/features/profile/presentation/components/Header/useHeader";

export const Header: React.FC = ({animValue, title, id}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const {isFavorite, setIsFavorite} = useHeader({id})

  const headerOpacity = animValue.interpolate({
    inputRange: [30, 100 + insets.top],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });
  const transparentHeaderOpacity = animValue.interpolate({
    inputRange: [0, 30],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  return (<View>
      <Animated.View style={{...styles.container, opacity: headerOpacity}}>
        <TouchableOpacity onPress={() => {
          router.back()
        }}>
          <Image source={require('@/assets/images/Orion_arrow-left.png')}/>
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>
        <View/>
      </Animated.View>

      <Animated.View style={{...styles.transparentContainer, opacity: transparentHeaderOpacity}}>
        <TouchableOpacity onPress={() => {
          router.back()
        }}>
          <Image source={require('@/assets/images/back-light.png')}/>
        </TouchableOpacity>
        <View style={styles.leftContainer}>
          <TouchableOpacity
            style={{...styles.favorites, backgroundColor: isFavorite ? '#ff0000' : 'rgba(0,0,0,0)'}}
            onPress={() => {
              addToFavoritesUseCase(id, !isFavorite)
              setIsFavorite(!isFavorite)
            }}>
            <Image source={require('@/assets/images/heart.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            alert('Share this')
          }}>
            <Image source={require('@/assets/images/upload.png')}/>
          </TouchableOpacity>
        </View>


      </Animated.View>


    </View>

  )
}

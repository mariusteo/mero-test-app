import React from "react";
import { View, Image} from "react-native";
import {styles} from "./styles";
import {Carousel} from 'react-native-basic-carousel'

export const ProfileCarousel: React.FC = ({images}) => {
  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={({item}) => {
          return <View style={styles.imageContainer}>
            <Image source={{uri: item.medium}} style={styles.image}/>
          </View>
        }}
        style={styles.pagerView}
      />
    </View>
  )
}

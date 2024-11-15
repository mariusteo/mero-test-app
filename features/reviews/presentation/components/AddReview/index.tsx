import {Image, Text, TouchableOpacity, View} from "react-native";
import {useContext} from "react";
import {ProfileContext} from "@/features/profile/presentation/context/ProfileContext";
import {styles} from "./styles";

const ratings = [
  {
    id: 'very_bad',
    text: 'Oribil',
  },
  {
    id: 'bad',
    text: 'Slab',
  },
  {
    id: 'medium',
    text: 'Bine',
  },
  {
    id: 'good',
    text: 'Foarte Bine',
  },
  {
    id: 'very_good',
    text: 'Excelent',
  }
]

export const AddReview = ({closeModal}) => {
  const {profile} = useContext(ProfileContext)
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Evalueaza serviciile oferite de Robert de la {profile.name}</Text>
      <Text style={styles.descriptionText}>Click pe o stea pentru a evalua</Text>
      <View style={styles.starContainer}>
        {ratings.map((rating) => {
          return <TouchableOpacity style={styles.starTouchable}>
            <Image source={require('@/assets/images/star_empty.png')}/>
            <Text  numberOfLines={1} style={styles.starText}>{rating.text}</Text>
          </TouchableOpacity>
        })}
      </View>

      <TouchableOpacity onPress={closeModal} style={styles.closeModalContainer}>
        <Text style={styles.closeModalText}>Mai Tarziu</Text>
      </TouchableOpacity>
    </View>
  )
}

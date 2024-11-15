import React, {useContext} from "react";
import {Image, SafeAreaView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {MeroButton} from "@/features/ui/presentation/components/MeroButton";
import {styles} from "./styles";
import {useAddReviewPage} from "@/features/reviews/presentation/pages/AddReviewPage/useAddReviewPage";

export const AddReviewPAge: React.FC = () => {
  const {currentDate} = useAddReviewPage()
  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < 4) {
      stars.push(<Image style={styles.starImage} source={require('@/assets/images/star_full.png')}/>)
    } else {
      stars.push(<Image style={styles.starImage} source={require('@/assets/images/star_empty.png')}/>)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText} numberOfLines={1}>
            {currentDate.toDateString()} <Text style={styles.shopText}>(Robert - One Barbershop)</Text></Text>
        </View>
        <View style={styles.starContainer}>
          {stars}
        </View>
        <View/>
        <View style={styles.userContainer}>
          <View style={styles.profileContainer}>
            <Text style={styles.profileInitials}>MU</Text>
            <Image style={styles.profileImage}/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}> My user</Text>
          </View>
        </View>
        <Text style={styles.titleText}>Descrie experiența ta</Text>
        <Text style={styles.descriptionText}>Opinia ta îi ajută la îmbunătățirea calității serviciilor, iar viitorii
          clienți primesc așteptările
          corecte.</Text>
        <TextInput style={styles.textInput} multiline numberOfLines={3}
                   placeholder={'Ajută-i pe alții oferind detalii despre experienta ta...'}/>
      </View>
      <MeroButton text={'Trimite'}/>
    </SafeAreaView>
  )
}

import React, {useContext} from "react";
import {Image, SafeAreaView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {MeroButton} from "@/features/ui/presentation/components/MeroButton";
import {styles} from "./styles";
import {useAddReviewPage} from "@/features/reviews/presentation/pages/AddReviewPage/useAddReviewPage";
import {StarSelector} from "@/features/reviews/presentation/components/StarSelector";
import {AddReviewContext} from "@/features/reviews/presentation/context/AddReviewContext";

export const AddReviewPAge: React.FC = () => {

  const {currentDate, score, shopName,review, setScore, setReview, saveReview} = useAddReviewPage()

  return (
    <AddReviewContext.Provider value={{score, setScore}}>
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText} numberOfLines={1}>
              {currentDate.toDateString()} <Text style={styles.shopText}>(Robert - {shopName})</Text></Text>
          </View>
          <View style={styles.starContainer}>
            <StarSelector/>
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
          <TextInput style={styles.textInput} multiline numberOfLines={3} onChangeText={setReview} value={review}
                     placeholder={'Ajută-i pe alții oferind detalii despre experienta ta...'}/>
        </View>
        <MeroButton text={'Trimite'} onPress={saveReview} />
      </SafeAreaView>
    </AddReviewContext.Provider>
  )
}

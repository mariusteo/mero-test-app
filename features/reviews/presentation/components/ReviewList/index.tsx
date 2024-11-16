import React, {useContext} from "react";
import {ActionSheetIOS, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {ProfileContext} from "@/features/profile/presentation/context/ProfileContext";
import {useReviewList} from "@/features/reviews/presentation/components/ReviewList/useReviewList";
import {ReviewCard} from "@/features/reviews/presentation/components/ReviewCard";
import {router} from "expo-router";

export const ReviewList: React.FC = () => {
  const {profile, openRatingModal} = useContext(ProfileContext)
  const {reviewList, ownReview} = useReviewList({profileId: profile._id})
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recenzii si Evaluari</Text>,
      <Text style={styles.score}>{Math.floor(profile.feedback.score * 10) / 10}</Text>
      <Text style={styles.reviews}>{profile.feedback.total} evaluari</Text>
      {ownReview && <ReviewCard props={ownReview} myReview={true}/>}
      {reviewList && reviewList.data.slice(0, 3).map((review) => {
        return <ReviewCard props={review}/>
      })}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {
          router.push('ratingModal')
        }}>
          <View style={styles.textWrapper}>
            <Text style={styles.buttonTextWithBackground}>Vezi mai multe recenzii</Text>
          </View>
        </TouchableOpacity>
      </View>

      {!ownReview && <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={openRatingModal}>
          <View style={styles.textWrapper}>
            <Text style={styles.buttonText}>Adauga Recenzie</Text>
          </View>
        </TouchableOpacity>
      </View>}


    </View>

  )
}

import React from "react";
import {FlatList, SafeAreaView, Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {useReviewsPage} from "@/features/reviews/presentation/pages/ReviewsPage/useReviewsPage";
import {ProfileContext} from "@/features/profile/presentation/context/ProfileContext";
import {Header} from "@/features/profile/presentation/components/Header";
import {styles} from "./styles";
import {ReviewHeader} from "@/features/reviews/presentation/components/ReviewHeader";
import {ReviewCard} from "@/features/reviews/presentation/components/ReviewCard";

export const ReviewsPage: React.FC = () => {
  const params = useLocalSearchParams();
  const {ownReview, setOwnReview, reviewList, profile, fetchNew} = useReviewsPage()
  // console.log('review list', reviewList)
  return (
    <ProfileContext.Provider value={{profile}}>
      <SafeAreaView style={styles.container}>
        <ReviewHeader title={profile?.name}/>
        <FlatList
          style={styles.container}
          data={reviewList?.data ?? []}
          renderItem={({item}) => <ReviewCard props={item}/>}
          keyExtractor={item => item._id}
          extraData={''}
          onEndReached={fetchNew}
          ListHeaderComponent={<View>
            <Text style={styles.title}>Recenzii si Evaluari</Text>,
            <Text style={styles.score}>{Math.floor(params.score * 10) / 10}</Text>
            <Text style={styles.reviews}>{params.total} evaluari</Text>
            {ownReview && <ReviewCard props={ownReview} myReview={true} setOwnReview={setOwnReview}/>}
          </View>}
        />
      </SafeAreaView>
    </ProfileContext.Provider>
  )
}

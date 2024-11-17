import {useActionSheet} from "@expo/react-native-action-sheet";
import {removeReviewUseCase} from "@/features/reviews/domain/useCases/removeReviewUseCase";
import {router} from "expo-router";
import {useContext} from "react";
import {ProfileContext} from "@/features/profile/presentation/context/ProfileContext";

export const useReviewCard = ({setOwnReview, props}) => {
  const {profile} = useContext(ProfileContext)
  const {showActionSheetWithOptions} = useActionSheet();
  const showActionSheet = () => {
    showActionSheetWithOptions({
      options: ['Modifica recenzie', 'Sterge recenzie', 'Anuleaza'],
      cancelButtonIndex: 2,
      destructiveButtonIndex: 1
    }, (selectedIndex) => {
      switch (selectedIndex) {
        case 0:
          router.push({
            pathname: 'add-review',
            params: {selection: props.feedback.score, shopName: profile.name, text: props.feedback.review}
          })
          break;
        case 1:
          removeReviewUseCase()
          setOwnReview(null)
          break;
      }
    })
  }
  return {showActionSheet}
}

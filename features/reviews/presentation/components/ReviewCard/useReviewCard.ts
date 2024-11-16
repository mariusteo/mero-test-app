import {useActionSheet} from "@expo/react-native-action-sheet";

export const useReviewCard = () => {
  const {showActionSheetWithOptions} = useActionSheet();
  const showActionSheet = () => {
    console.log('before')
    showActionSheetWithOptions({
      options: ['Modifica recenzie', 'Sterge recenzie', 'Anuleaza'],
      cancelButtonIndex: 2,
      destructiveButtonIndex: 1
    }, (selectedIndex) => {
      console.log('here')
      switch (selectedIndex) {
        case 0:
          alert('navigheaza')
          break;

        case 1:
          alert('sterge')
          break;

        case 2:
        // Canceled
      }
    })
  }
  return {showActionSheet}
}

import {Modal, Pressable, View} from "react-native";
import {styles} from "./styles";

export const HalfModal = ({showModal, closeModal, children}) => {

  return (<Modal visible={showModal}
                 presentationStyle={'formSheet'}
                 onRequestClose={closeModal}
                 transparent={true}
  >
    <Pressable style={styles.modalUpper} onPress={closeModal}/>
    <View style={styles.modalLower}>
      {children}
    </View>

  </Modal>)
}

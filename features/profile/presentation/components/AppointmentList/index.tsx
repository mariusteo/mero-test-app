import {ScrollView, Text, View} from "react-native";
import {styles} from "./styles";
import {useAppointmentList} from "@/features/profile/presentation/components/AppointmentList/useAppointmentList";
import {Appointment} from "@/features/profile/presentation/components/Appointment";

export const AppointmentList: React.FC = () => {
  const appointmentList = useAppointmentList()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ultimele Programari</Text>
      <ScrollView horizontal>
        {
          appointmentList.map((appointment)=>{
            return <Appointment appointment={appointment}/>
          })
        }
      </ScrollView>
    </View>
  )
}

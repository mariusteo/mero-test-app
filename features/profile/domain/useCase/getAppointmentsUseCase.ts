import {fetchAppointments} from "@/features/profile/data/local/fetchAppointments";

export const getAppointmentsUseCase=()=>{
  return fetchAppointments()
}

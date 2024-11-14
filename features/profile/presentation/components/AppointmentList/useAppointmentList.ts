import {useEffect, useState} from "react";
import {Appointment} from "@/features/profile/domain/types/apointments";
import {getAppointmentsUseCase} from "@/features/profile/domain/useCase/getAppointmentsUseCase";

export const useAppointmentList=()=>{
  const [appointmentList, setAppointmentList]=useState<Appointment[]>([])

  useEffect(() => {
    setAppointmentList(getAppointmentsUseCase())
  }, []);
  return appointmentList
}

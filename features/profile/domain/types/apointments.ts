export interface AppointmentStatus {
  status: string,
  color: string
}

export interface Appointment {
  status: AppointmentStatus,
  title: string,
  time: string,
}

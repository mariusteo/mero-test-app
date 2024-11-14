import {Appointment} from "@/features/profile/domain/types/apointments";

const lastAppointments: Appointment[] = [
  {
    status: {
      status: 'confirmat',
      color: '#2DCE89'
    },
    time: 'Du. 8 dec. - 13:30',
    title: 'Tuns + Spalat'
  },
  {
    status: {
      status: 'finalizat',
      color: '#52577F'
    },
    time: 'Sâ. 7 iun. - 09:30',
    title: 'Tuns VIP'
  },
  {
    status: {
      status: 'finalizat',
      color: '#52577F'
    },
    time: 'Sâ. 9 iun. - 10:30',
    title: 'Tuns VIP 2'
  },

]

export const fetchAppointments = (): Appointment[] => {
  return lastAppointments
}

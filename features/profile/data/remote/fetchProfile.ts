import axios from "axios";

export async function fetchProfile({slug}) {
  return axios.get<object>(`https://mero.ro/api/v2.0/business/page/${slug}/profile`);
}

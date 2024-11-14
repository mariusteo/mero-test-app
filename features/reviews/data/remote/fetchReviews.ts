import axios from "axios";

export async function fetchReviews({id, pageSize}) {
  return axios.get<object>(`https://mero.ro/api/v2.0/mp/pages/${id}/reviews?limit=${pageSize}`);
}

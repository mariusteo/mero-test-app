import {fetchProfile} from "@/features/profile/data/remote/fetchProfile";

export const getProfileUseCase = ({slug}) => {
  return fetchProfile({slug});
}

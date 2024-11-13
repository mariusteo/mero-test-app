import {useEffect, useState} from "react";
import {getProfileUseCase} from "@/features/profile/domain/useCase/getProfileUseCase";

export const useProfilePage = () => {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    getProfileUseCase({slug: 'one-barbershop'}).then((response) => {
      console.log('!!!', response)
      setProfile(response.data)
    })
  }, []);

  return {profile};
}

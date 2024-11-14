import {useEffect, useState} from "react";
import {getProfileUseCase} from "@/features/profile/domain/useCase/getProfileUseCase";
import {PageProfile} from "@/features/profile/domain/types/profile";

export const useProfilePage = () => {
  const [profile, setProfile] = useState<PageProfile>()

  useEffect(() => {
    getProfileUseCase({slug: 'one-barbershop'}).then((response) => {
      console.log('!!!', response)
      setProfile(response.data)
    })
  }, []);

  return {profile};
}

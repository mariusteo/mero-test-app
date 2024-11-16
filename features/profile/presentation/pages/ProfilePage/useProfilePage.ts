import {useEffect, useState} from "react";
import {getProfileUseCase} from "@/features/profile/domain/useCase/getProfileUseCase";
import {PageProfile} from "@/features/profile/domain/types/profile";

export const useProfilePage = () => {
  const [profile, setProfile] = useState<PageProfile>()
  const [showRatingModal, setShowRatingModal] = useState(false)

  useEffect(() => {
    getProfileUseCase({slug: 'one-barbershop'}).then((response) => {
      setProfile(response.data)
    })
  }, []);
  const openRatingModal = () => {
    setShowRatingModal(true)
  }
  const closeRatingModal = () => {
    setShowRatingModal(false)
  }

  return {profile, showRatingModal, openRatingModal, closeRatingModal};
}

import {useEffect, useState} from "react";
import {checkIsFavorite} from "@/features/profile/data/local/checkIsFavorite";
import {checkIsFavoriteUseCase} from "@/features/profile/domain/useCase/checkIsFavoriteUseCase";

export const useHeader = ({id}) => {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    checkIsFavoriteUseCase(id).then((value) => {
      setIsFavorite(value === 'true')
    })
  }, []);

  return {isFavorite, setIsFavorite};
}

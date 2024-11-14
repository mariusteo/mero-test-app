import {checkIsFavorite} from "@/features/profile/data/local/checkIsFavorite";

export const checkIsFavoriteUseCase=(id:string)=>{
  return checkIsFavorite(id)
}

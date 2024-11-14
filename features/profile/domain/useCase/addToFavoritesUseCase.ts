import {saveAsFavorite} from "@/features/profile/data/local/saveAsFavorite";

export const addToFavoritesUseCase = (id: string, value:boolean) => {
  saveAsFavorite(id, value);
}

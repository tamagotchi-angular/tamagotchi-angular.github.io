import { createSelector } from "@ngrx/store";
import { IMG_IDS } from "../core/pet-img.service";
import { PetGalleryState, PetImageData, PetLevelState, PetImage, IMAGE_URL } from "./index";

export const selectFilter = createSelector(
    (state: PetGalleryState) => {
        return state.level;
    },
    (level: PetLevelState) => {
        return level;
    }
);

export const selectImageData = createSelector(
    (state: PetGalleryState) => {
        return state.petImage;
    },
    (petImage: IMAGE_URL) => petImage
);

// export const selectFilteredImages = createSelector(
//     selectFilter,
//     selectImageData,
//     (level: PetLevelState, petImage: PetImage) => {
//         if (PetLevelState.Egg) {
//             return PetImage.url.egg
//         } else if (PetLevelState.Junior) {
//             return PetImage.url.junior
//         } else if (PetLevelState.Adult) {
//             return PetImage.url.adult
//         }
//     }
// )
import { createReducer } from "@ngrx/store";
import { PetImage, PetLevelState, PetImageData, PetGalleryState, IMAGE_URL, } from "..";
import { IMG_IDS } from "../../core/pet-img.service";
import { loadImg } from "../actions/image.actions";

const initialState: PetGalleryState =
{
    level: PetLevelState.Egg,
    petImage: IMAGE_URL.egg
}

/*
export const imageURLReducer = createReducer<PetImage>(`https://drive.google.com/uc?id=${IMG_IDS.egg}`,
    on(loadImg, (state, { level, petImage }) => {
        if (level == 'egg') {
            return petImage.url.egg
        } else if (PetLevelState.Junior) {
            return petImage.url.junior
        } else if (PetLevelState.Adult) {
            return petImage.url.adult
        }
    })
);
*/
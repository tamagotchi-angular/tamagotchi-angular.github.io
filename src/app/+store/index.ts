import { ActionReducerMap } from '@ngrx/store';

import * as fromImage from './reducers/imageReducer'
import * as fromParams from './reducers/paramsReducer'
import * as paramActions from './actions/params.actions'
import * as currentPetActions from './actions/currentPet.actions'
import * as fromCurrentPet from './reducers/currentPetReducer'
import * as fromImGPet from './reducers/imageReducer'
import { IPet } from '../core/interfaces';
import { IMG_IDS } from '../core/pet-img.service';

export interface PetState {
    petParams: PetParams,
    currentPet: IPet,
   // petImage: PetImage
}
//    
//petLevels: PetLevelState

export const reducers: ActionReducerMap<PetState> = {
    petParams: fromParams.paramsReducer,
    currentPet: fromCurrentPet.currentPetReducer,
   // petImage: fromImGPet.imageURLReducer
}

export interface PetImage {
    url: IMAGE_URL;
}

export interface PetImageData {
    egg: boolean;
    junior: boolean;
    adult: boolean;
}

export interface PetParams {
    trainMeter: number,
    sleepMeter: number,
    eatMeter: number,
    bathMeter: number
}

export enum PetLevelState {
    Egg = 'egg',
    Junior = 'junior',
    Adult = 'adult'
}

export interface PetGalleryImageFilter {
    petLevelState: PetLevelState;
    selected: boolean;
}

export interface PetGalleryState {
    level: PetLevelState,
    petImage: IMAGE_URL
}

export enum IMAGE_URL {
    egg = `https://drive.google.com/uc?id=1lrFTuZQuyWuZkbs02BlXN74VyhvYg-j2`,
    junior = `https://drive.google.com/uc?id=1lrFTuZQuyWuZkbs02BlXN74VyhvYg-j2`,
    adult = `https://drive.google.com/uc?id=1lrFTuZQuyWuZkbs02BlXN74VyhvYg-j2`
}

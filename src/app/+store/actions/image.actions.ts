import { createAction, props } from "@ngrx/store";
import { IPet } from "src/app/core/interfaces";
import { PetImage, PetLevelState } from "..";

const imagePetDomain = '[ImagePetDomain]'

export const loadImg = createAction(`${imagePetDomain} LoadImg`, props<{ pet: IPet }>())
export const updateImg = createAction(`${imagePetDomain} UpdateImg`, props<{ pet: IPet }>())

export const ToggleLevel = createAction(
    `${imagePetDomain} ToggleLevel`,
    props<{level: PetLevelState, petImage: PetImage}>()
  )

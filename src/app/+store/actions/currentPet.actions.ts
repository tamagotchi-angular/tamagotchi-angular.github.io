import { createAction, props } from "@ngrx/store";
import { IPet } from "src/app/core/interfaces";

const currentPetDomain = '[MyCurrentPetDomain]'

export const load = createAction(`${currentPetDomain} Load`, props<{ pet: IPet }>())
export const update = createAction(`${currentPetDomain} Update`, props<{ pet: IPet }>())
export const increase = createAction(`${currentPetDomain} Increase`)
export const neglect = createAction(`${currentPetDomain} Neglect`)
export const reset = createAction(`${currentPetDomain} Reset`)
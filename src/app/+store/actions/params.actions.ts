import { createAction, props } from "@ngrx/store"; 
import { IPet } from "src/app/core/interfaces";

const myParamsDomain = '[MyParams]'

export const care = createAction(`${myParamsDomain} Care`, props<{pet: IPet}>());//
export const neglect = createAction(`${myParamsDomain} Neglect`);
export const reset = createAction(`${myParamsDomain} Reset`);
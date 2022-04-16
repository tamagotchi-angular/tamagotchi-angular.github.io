import { createAction } from "@ngrx/store"; 

const myLevelDomain = '[MyLevelDomain]'

export const evolve = createAction(`${myLevelDomain} Evolve`);
import { createReducer, on } from "@ngrx/store";
import { PetLevelState } from "..";
import { evolve } from "../actions/level.actions";

let initialLevel = PetLevelState.Egg;


export const petLevelReducer = createReducer(
    initialLevel,
    on(evolve, (state) => {
        return state
    })
)
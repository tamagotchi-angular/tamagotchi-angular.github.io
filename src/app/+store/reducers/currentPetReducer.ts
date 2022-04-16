import { createReducer, on } from "@ngrx/store";
import { IPet } from "src/app/core/interfaces";
import { increase, load, update, reset } from "../actions/currentPet.actions";
import { neglect } from "../actions/params.actions";

export const currentPetReducer = createReducer<IPet>(
    undefined!,
    on(load, (state, action) => action.pet),
    on(update, (state, action) => action.pet),
    on(increase, (state) => {
        return {
            ...state,
            trainMeter: state.trainMeter + 10,
            sleepMeter: state.sleepMeter + 10,
            eatMeter: state.eatMeter + 10,
            bathMeter: state.bathMeter + 10
        }
    }),
    on(neglect, (state) => {
        return {
            ...state,
            trainMeter: state.trainMeter - 10,
            sleepMeter: state.sleepMeter - 10,
            eatMeter: state.eatMeter - 10,
            bathMeter: state.bathMeter - 10
        }
        }),
        on(reset, (state) => {
            return {
                ...state,
                trainMeter: 10,
                sleepMeter: 10,
                eatMeter: 10,
                bathMeter: 10
            }
        })

)

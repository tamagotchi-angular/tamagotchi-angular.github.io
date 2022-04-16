import { createReducer, on } from "@ngrx/store";
import { PetParams } from "..";
import { care, neglect, reset } from "../actions/params.actions";

let initialParams: PetParams = {
    trainMeter: 10,
    sleepMeter: 10,
    eatMeter: 10,
    bathMeter: 10
}

export const paramsReducer = createReducer<PetParams>(
    initialParams,
    on(care, (state) =>    {   
    return {
        trainMeter: state.trainMeter + 10,
        sleepMeter: state.sleepMeter + 10,
        eatMeter: state.eatMeter + 10,
        bathMeter: state.bathMeter + 10
    }
    }),
    on(neglect, (state) => {
    return {
        trainMeter: state.trainMeter - 10,
        sleepMeter: state.sleepMeter - 10,
        eatMeter: state.eatMeter - 10,
        bathMeter: state.bathMeter - 10
    }
    }),
    on(reset, () => {
        return {
            trainMeter: 10,
            sleepMeter: 10,
            eatMeter: 10,
            bathMeter: 10
        }
    })
);

/*
export const reducer = createReducer(
  initialState,
  on(add, (state, { payload }) => ({
    ...state,
    count: state.count + payload.value
  }))
);
*/
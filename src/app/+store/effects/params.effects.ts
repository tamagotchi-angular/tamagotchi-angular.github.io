import { Injectable } from "@angular/core";
import { Actions,  Effect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { PetService } from "../../core/pet.service";
import * as ParamsActions from "../actions/params.actions";


@Injectable()
export class ParamsEffects {

    @Effect()
    public loadPetParams$ = this.actions$
    .pipe(
        ofType(ParamsActions.care),
        mergeMap((action)=> this.petService.loadPetById(action.pet._id)
        .pipe(
            map(pet => ({type: ParamsActions.care, payload: pet}))
        )
    )
    );

    public updatePetParams$ = this.actions$
    .pipe(
        ofType(ParamsActions.care),
        mergeMap((action)=> this.petService.updateAPet(action.pet._id, { 
            trainMeter: action.pet.trainMeter, sleepMeter: action.pet.sleepMeter, eatMeter: action.pet.eatMeter, bathMeter: action.pet.bathMeter
        })
        .pipe(
            map(pet => ({type: ParamsActions.care, payload: pet}))
        )
    )
    );
 
    constructor(
        private actions$: Actions,
        private petService: PetService) { }

        
}

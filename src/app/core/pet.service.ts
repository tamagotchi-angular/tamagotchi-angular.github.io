import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IPet } from './interfaces';
import { PetState } from '../+store';
import { load } from '../+store/actions/currentPet.actions';
const apiUrl = environment.apiUrl;

// export interface IUpdateIPetDto extends Pick<IPet, 'petPicture'>{ }

@Injectable()
export class PetService {

  pet$: Observable<IPet> = this.store.select(globalState => globalState.currentPet)

  constructor(private httpClient: HttpClient,
    private store: Store<PetState>) { }

  createPet(body: { ['pet-name']: string, ['pet-type']: string, gender: string}): Observable<IPet>{
    return this.httpClient.post<IPet>(`${apiUrl}/data/catalog`, body)
  }
  getMyPets(): Observable<IPet[]>{
    return this.httpClient.get<IPet[]>(`${apiUrl}/mypets`)
  }
  loadPetCatalog(searchTerm: string = ''): Observable<IPet[]>{
    return this.httpClient.get<IPet[]>(`${apiUrl}/data/catalog?name=${searchTerm}`);
  }

  loadPetById(petId: string): Observable<IPet>{
    return this.httpClient.get<IPet>(`${apiUrl}/data/catalog/${petId}`);
  }

  likePet(petId: string): Observable<void>{
    return this.httpClient.get<void>(`${apiUrl}/data/catalog/${petId}/like`);
  }

  unlikePet(petId: string): Observable<void>{
    return this.httpClient.get<void>(`${apiUrl}/data/catalog/${petId}/unlike`);
  }

  befriendAPet(petId: string): Observable<void>{
    return this.httpClient.get<void>(`${apiUrl}/data/catalog/${petId}/friends`)
  }

  unfriendAPet(petId: string,): Observable<void>{
    return this.httpClient.delete<void>(`${apiUrl}/data/catalog/${petId}/friends`)
  }

  updateAPet(petId: string, body:{ trainMeter: number, sleepMeter: number, eatMeter: number, bathMeter: number}): Observable<IPet>{
    return this.httpClient.put<IPet>(`${apiUrl}/data/catalog/${petId}`, body)
  }

  handleCurrentPet(newPet: IPet){
    this.store.dispatch(load({pet: newPet}));
  }

}

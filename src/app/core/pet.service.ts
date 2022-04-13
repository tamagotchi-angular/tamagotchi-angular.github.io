import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IPet } from './interfaces';

const apiUrl = environment.apiUrl;

@Injectable()
export class PetService {

  constructor(private httpClient: HttpClient) { }

  createPet(body: { ['pet-name']: string, ['pet-type']: string, gender: string}): Observable<IPet>{
    return this.httpClient.post<IPet>(`${apiUrl}/data/catalog`, body)
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

  befriendAPet(petId: string, userId: string): Observable<void>{
    return this.httpClient.get<void>(`${apiUrl}/data/catalog/${petId}/friends/${userId}`)
  }

  unfriendAPet(petId: string, userId: string): Observable<void>{
    return this.httpClient.delete<void>(`${apiUrl}/data/catalog/${petId}/friends/${userId}`)
  }
}

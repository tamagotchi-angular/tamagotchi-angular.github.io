import { Injectable } from '@angular/core';

export enum Gender {
  Female = '&female;',
  Male = '&male;'
}

export interface PetTypes {
  'cat' : '../../assets/images/cat-pet.png'
}

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  currentGender: Gender = Gender.Female;

  constructor() { }

  changeGender(newGender: Gender){
    this.currentGender = newGender;
  }
}

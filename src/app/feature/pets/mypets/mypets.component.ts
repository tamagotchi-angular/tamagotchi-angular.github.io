import { Component, OnChanges, OnInit } from '@angular/core';
import { IPet } from 'src/app/core/interfaces';
import { PetService } from 'src/app/core/pet.service';

@Component({
  selector: 'app-mypets',
  templateUrl: './mypets.component.html',
  styleUrls: ['./mypets.component.css']
})
export class MypetsComponent implements OnInit{

  constructor(private petService: PetService) { }

petsArr!: IPet[];

  ngOnInit(): void {
    this.petService.getMyPets().subscribe(pets =>  this.petsArr = pets);
  }
  getMyPets() {
   
  }
}

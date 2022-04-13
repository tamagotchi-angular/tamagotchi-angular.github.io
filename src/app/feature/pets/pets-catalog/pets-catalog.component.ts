import { Component, OnInit } from '@angular/core';
import { IPet } from 'src/app/core/interfaces';
@Component({
  selector: 'app-pets-catalog',
  templateUrl: './pets-catalog.component.html',
  styleUrls: ['./pets-catalog.component.css']
})

export class PetsCatalogComponent implements OnInit {
  petCatalog!: IPet[];
  
  constructor() { }

  ngOnInit(): void {
  }

}

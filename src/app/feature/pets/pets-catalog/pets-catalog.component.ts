import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith, switchMap, tap } from 'rxjs';
import { IPet } from 'src/app/core/interfaces';
import { PetService } from 'src/app/core/pet.service';

@Component({
  selector: 'app-pets-catalog',
  templateUrl: './pets-catalog.component.html',
  styleUrls: ['./pets-catalog.component.css']
})

export class PetsCatalogComponent implements OnInit, AfterViewInit {
  petCatalog!: IPet[];

  searchControl = new FormControl('');

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(3000),
      tap(searchTerm => (console.log('searchTerm', searchTerm))),
      switchMap(searchTerm => this.petService.loadPetCatalog(searchTerm))
    )
      .subscribe(petList => {
        this.petCatalog = petList;
      });
  }

  ngAfterViewInit(): void {
    console.log('View was initialized');
  }
}

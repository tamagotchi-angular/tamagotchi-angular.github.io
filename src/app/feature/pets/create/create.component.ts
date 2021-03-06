import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SVGEggComponent } from '../../../shared/egg/egg.component'
import { SVGDogComponent } from '../../../shared/dog/dog.component'
import { PetService } from 'src/app/core/pet.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  
})
export class CreateComponent implements OnInit, AfterViewInit {

  @ViewChild('createForm') createForm!: NgForm;

  constructor(private router: Router,private petService: PetService) { }

  select ='';
  genderTypes :string[] = ['female', 'male'];
  genderSign!:string;
  selectedGender!:string;

  pets: string[] = [
    "Cat",
    "Dog",
    "Mouse"
  ];
  itemImageUrl!:string;
  hasChosenPet = false;  
  petName!: string 


  ngOnInit(): void {
  }

  createNewPet(): void {
    console.log(this.createForm.value);
    this.petService.createPet(this.createForm.value).subscribe({
      next: (pet) => {
        console.log(pet);
        this.router.navigate(['/catalog/' + pet._id])
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  ngAfterViewInit(): void {

    this.createForm.valueChanges?.subscribe(value => {
      if(value['pet-type']){
        this.hasChosenPet = true;
      }
      if(value['pet-name']){
        this.petName = value['pet-name'];
      }

     this.selectedGender = value.gender;
      console.log('value changed', value);

      if(value['pet-type'] == 'Cat'){
        this.itemImageUrl = '../../assets/images/cat-pet.jpg';
      } else if(value['pet-type'] == 'Dog'){
        this.itemImageUrl = '../../assets/images/dog-pet.png';
      } else if(value['pet-type'] == 'Mouse'){
        this.itemImageUrl = '../../assets/images/mouse-pet.jpg';
      }
    });
  }
}

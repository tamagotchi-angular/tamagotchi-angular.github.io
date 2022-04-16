import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, mergeMap, combineLatest, BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IPet, IUser } from 'src/app/core/interfaces';
import { PetService } from 'src/app/core/pet.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit, OnChanges {
  isUserOwner: boolean = false;
  canFriend: boolean = false;
  canLike: boolean = false;
  canFriend$!: Observable<boolean>
  hasLiked$!: Observable<boolean>
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  currentUser$: Observable<IUser | undefined> = this.authService.currentUser$;
  itemImageUrl!:string;
  @Input() pet!: IPet;
  refreshPetRequest$ = new BehaviorSubject(undefined);
  constructor(
    private activatedRoute: ActivatedRoute,
     private authService: AuthService, 
     private petService: PetService,
     private store: Store<IPet>
     ) { }

  ngOnInit(): void {
    combineLatest([this.activatedRoute.params
      .pipe(
        mergeMap(params => {
          const petId = params['petId'];
          return this.petService.loadPetById(petId);
        })),
    this.authService.currentUser$
    ])
      .subscribe(([pet, user]) => {
        this.pet = pet;
        console.log(pet)
        this.petService.handleCurrentPet(pet);
        if(pet.type == 'Cat'){
          this.itemImageUrl = '../../assets/images/cat-pet.jpg';
        } else if(pet.type  == 'Dog'){
          this.itemImageUrl = '../../assets/images/dog-pet.png';
        } else if(pet.type == 'Mouse'){
          this.itemImageUrl = '../../assets/images/mouse-pet.jpg';
        }
        this.canFriend = (user && !this.pet.friends.includes(user?._id))!;
        this.canLike = (user! && !this.pet.likes.includes(user?._id))!;
        this.isUserOwner = (user && this.pet.owner === user?._id)!;
      })
  }

  ngOnChanges(): void {
    this.canFriend$ = this.authService.currentUser$.pipe(map((currentUser) => {
      if (!currentUser || !this.pet) {
        return false;
      }
      return !this.pet.friends.includes(currentUser._id)
    }))

    this.hasLiked$ = this.authService.currentUser$.pipe(map((currentUser) => {
      if (!currentUser || !this.pet) {
        return false;
      }
      return !this.pet.likes.includes(currentUser._id)
    }))

  }

  friend(): void {
    this.petService.befriendAPet(this.pet._id)
      .subscribe(() => this.refreshPetRequest$.next(undefined));
  }

  unfriend(): void {
    this.petService.unfriendAPet(this.pet._id)
    .subscribe(() => this.refreshPetRequest$.next(undefined));
  }
}

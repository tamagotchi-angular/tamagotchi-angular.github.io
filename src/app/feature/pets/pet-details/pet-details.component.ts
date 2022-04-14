import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map} from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IPet, IUser } from 'src/app/core/interfaces';
import { PetService } from 'src/app/core/pet.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit, OnChanges {

  canFriend$!: Observable<boolean>
  hasLiked$!: Observable<boolean>
  currentUser$: Observable<IUser | undefined> = this.authService.currentUser$;

  @Input() pet!: IPet;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private petService: PetService) { }

  ngOnInit(): void {
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

  
}

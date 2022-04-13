import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IPet } from 'src/app/core/interfaces';
import { map } from 'rxjs';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {

  canFriend$!: Observable<boolean>
  hasLiked$!: Observable<boolean>

  @Input() pet!: IPet;

  constructor(private authService: AuthService) { }

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

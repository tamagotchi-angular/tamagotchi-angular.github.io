import { TestBed } from '@angular/core/testing';

import { PetImgService } from './pet-img.service';

describe('PetImgService', () => {
  let service: PetImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

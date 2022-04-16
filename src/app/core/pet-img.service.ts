import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PetImage } from '../+store';

export enum IMG_IDS{
  egg= '1lrFTuZQuyWuZkbs02BlXN74VyhvYg-j2',
  junior='1lrFTuZQuyWuZkbs02BlXN74VyhvYg-j2',
  adult = '1lrFTuZQuyWuZkbs02BlXN74VyhvYg-j2'
}
//IMAGE_ENDPOINT: string = `https://www.googleapis.com/drive/v2/files/${IMG_IDS.egg}`;
@Injectable({
  providedIn: 'root'
})
export class PetImgService {
  IMAGE_ENDPOINT: string = `https://drive.google.com/uc?id=${IMG_IDS.egg}`;
  DEFAULT_IMAGE_TYPE: string = 'jpg';

  constructor(private httpClient: HttpClient, ) { }

  getImage(): Observable<PetImage>{
    return this.httpClient.get<PetImage>(`${this.IMAGE_ENDPOINT}`);
  }

  // changeImageWhenUpgradeLevel(): Observable<PetImage>{}
}

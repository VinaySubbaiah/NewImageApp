import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

export type Item = {
  image_id: number;
  image_url: string;
  data1: string;
  data2: string;
  data3: string;

}
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  getImages() {
    return this._http.get('/assets/data/data.json').pipe(map(res => res as Array<Item>));
  }

  constructor(private _http: HttpClient) { }
}

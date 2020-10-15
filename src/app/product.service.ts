import { getLocaleNumberSymbol } from '@angular/common';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProductService {

  constructor( private _http: Http) {}

}

export class _albumUrl {
    "artist": "The Prependers",
    "album": {
      "name": "Opacity Zero",
      "releaseDate": "September 25, 2014",
      "coverImage": "assets/opacity-zero.jpg",
      "tracks": [
        {"trackNumber": 1, "trackName": "The Last", "trackLength": "4:48", "trackPrice": 0.99 },
        {"trackNumber": 2, "trackName": "Downtown", "trackLength": "3:13", "trackPrice": 0.99 },
        {"trackNumber": 3, "trackName": "Yellow Carpet", "trackLength": "3:42", "trackPrice": 0.99 },
        {"trackNumber": 4, "trackName": "Rocket to Mars", "trackLength": "4:31", "trackPrice": 0.99 },
        {"trackNumber": 5, "trackName": "Walk, not Run", "trackLength": "2:53", "trackPrice": 0.99 },
        {"trackNumber": 6, "trackName": "Design", "trackLength": "5:12", "trackPrice": 0.99 },
        {"trackNumber": 7, "trackName": "Shopping Cart", "trackLength": "9:07", "trackPrice": 0.99 },
        {"trackNumber": 8, "trackName": "Our Gift to You", "trackLength": "3:59", "trackPrice": 0.99 }
      ]
    }
}
getAlbum (){
  "id": 1
  return this._http.get(_albumUrl)
}

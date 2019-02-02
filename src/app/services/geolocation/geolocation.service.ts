import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  constructor() {}

  startGeoLocation(): void {
    console.log('Geo localizacion activa');
  }
}

import { Injectable } from '@angular/core';
import {
  BackgroundGeolocation,
  BackgroundGeolocationConfig,
  BackgroundGeolocationResponse
} from '@ionic-native/background-geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  constructor() {}

  private backgroundGeolocation: BackgroundGeolocation;
  startGeoLocation(): void {
    console.log('Geo localizacion activa');
    const GEOLOCATION_CONFIG: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 30,
      debug: true,
      stopOnTerminate: false,
      notificationText: 'Localizacion Activa',
      notificationsEnabled: true
    };

    BackgroundGeolocation.configure(GEOLOCATION_CONFIG)
      .then(location => {
        alert(location);
      })
      .catch(err => {
        console.log(err);
      });

    BackgroundGeolocation.start()
      .then((location: BackgroundGeolocationResponse) => {
        console.log(location);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getStatus() {
    BackgroundGeolocation.checkStatus().then(status => {
      alert(status);
    });
  }

  showLocations() {
    BackgroundGeolocation.getLocations().then(locations => {
      console.log(locations);
    });
  }
}

import { Injectable } from '@angular/core';
import {
  BackgroundGeolocation,
  BackgroundGeolocationConfig,
  BackgroundGeolocationResponse,
} from '@ionic-native/background-geolocation';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  constructor() {}

  storage = new Storage({
    name: 'locations',
    driverOrder: ['indexeddb', 'sqlite', 'websql'],
  });

  private backgroundGeolocation: BackgroundGeolocation;
  startGeoLocation() {
    console.log('Geo localizacion activa');
    const GEOLOCATION_CONFIG: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 30,
      debug: true,
      stopOnTerminate: false,
      notificationText: 'Localizacion Activa',
      notificationsEnabled: true,
    };

    BackgroundGeolocation.configure(GEOLOCATION_CONFIG)
      .then((location) => {
        alert(JSON.stringify(location));
      })
      .catch((err) => {
        console.log(err);
      });

    BackgroundGeolocation.start()
      .then((location: BackgroundGeolocationResponse) => {
        console.log(location);
      })
      .catch((err) => {
        console.log(err);
      });
    this.storage.clear();
  }

  getStatus() {
    BackgroundGeolocation.checkStatus().then((status) => {
      alert(JSON.stringify(status));
    });
  }

  showLocations() {
    BackgroundGeolocation.getLocations().then((locations) => {
      console.log(JSON.stringify(locations));
    });
  }

  stopGeolocation() {
    BackgroundGeolocation.stop();
  }

  getCurrentLocation() {
    BackgroundGeolocation.getCurrentLocation().then((location) => {
      var hora = new Date(location.time);
      var k = '' + new Date().getTime();
      this.storage.set(k, JSON.stringify(location));
      this.storage.get(k).then((value) => {
        console.log('Guardado: ' + JSON.stringify(value));
      });
    });
  }

  leePosicionameinto() {
    this.storage.keys().then((keys) => {
      keys.forEach((key) => {
        this.storage.get(key).then((value) => {});
      });
    });
  }
}

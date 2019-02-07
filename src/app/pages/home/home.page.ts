import { Component } from '@angular/core';
import { GeolocationService } from '../../services/geolocation/geolocation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  geolocation = new GeolocationService();
  interval: any;

  startNavigation() {
    this.geolocation.startGeoLocation();
    this.iniciarPosicionamiento();
  }
  getGeolocationStatus() {
    this.geolocation.getStatus();
  }

  showLocations() {
    this.geolocation.showLocations();
  }

  stopBackGroundLocation() {
    this.geolocation.stopGeolocation();
    clearInterval(this.interval);
  }

  showLocation() {
    this.geolocation.getCurrentLocation();
  }

  iniciarPosicionamiento() {
    this.interval = setInterval(() => {
      this.showLocation();
    }, 60000);
  }

  leePosicionameinto() {
    this.geolocation.leePosicionameinto();
  }
}

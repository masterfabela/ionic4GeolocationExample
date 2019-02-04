import { Component } from '@angular/core';
import { GeolocationService } from '../../services/geolocation/geolocation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  geolocation = new GeolocationService();
  startNavigation() {
    this.geolocation.startGeoLocation();
  }
  getGeolocationStatus() {
    this.geolocation.getStatus();
  }

  showLocations() {
    this.geolocation.showLocations();
  }
}

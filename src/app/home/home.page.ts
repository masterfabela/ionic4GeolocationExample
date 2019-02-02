import { Component } from '@angular/core';
import { GeolocationService } from '../services/geolocation/geolocation.service';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  startNavigation() {
    new GeolocationService().startGeoLocation();
  }
}

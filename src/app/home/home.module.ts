import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { GeolocationService } from '../services/geolocation/geolocation.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocationService,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {
  startNavigation() {
    const geolocation = new GeolocationService();
    geolocation.startGeoLocation();
  }
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Map } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;
  map: Map;
  constructor() {}

  ngOnInit() {
    this.loadMap();
    /*
    Leaflet.map('map', {
      center: [51.505, -0.09],
      zoom: 13
    });
    */
  }

  loadMap() {}
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation.service';
import ThreeGlobe from 'three-globe'
import * as THREE from 'three';


@Component({
  selector: 'app-over',
  templateUrl: './over.page.html',
  styleUrls: ['./over.page.scss'],
})
export class OverPage implements OnInit {
  @ViewChild('globeViz', { static: true }) globeViz: any;
  
  latitude: number;
  longitude: number;

  constructor(
    private geolocationService: GeolocationService
  ) {}

  ngOnInit() {
    //this.globeViz;
    /*this.map.nativeElement = new THREE.Scene(); 
    this.map.nativeElement.add(this.myGlobe);
    this.map.nativeElement.add(new THREE.AmbientLight(0xbbbbbb));
    this.map.nativeElement.add(new THREE.DirectionalLight(0xffffff, 0.6));*/
  }
  
  onGetLocationClick() {
    this.geolocationService.getGeolocation();
    this.latitude = this.geolocationService.latitude;
    this.longitude = this.geolocationService.longitude;
  }
}
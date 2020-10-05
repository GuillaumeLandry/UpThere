import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  position: any;
  latitude: any;
  longitude: any;

  constructor(  
  ) {}
  
  async getGeolocation() {
    this.position = await Geolocation.getCurrentPosition();
    this.latitude = this.position.coords.latitude;
    this.longitude = this.position.coords.longitude;
  }
}

import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Camera, CameraOptions } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  picture: any;

  constructor(  
  ) {}
}

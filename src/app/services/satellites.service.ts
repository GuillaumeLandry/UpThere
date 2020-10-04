import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SatellitesService {
  private nasaApiKey = "4Mk1N5fZHczfBgoC8ajs3ti286kJxpyxW7F33aXJ";

  img: any;

  constructor(  
    private http: HttpClient,
  ) {}

  getSSCimage() {
    return this.http.get<any>(`https://sscweb.gsfc.nasa.gov/WS/sscr/2/key=${this.nasaApiKey}`)
      .subscribe(img => { 
        this.img = img 
      });
  }
}

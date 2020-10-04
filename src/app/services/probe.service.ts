import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProbeService {
  private nasaApiKey = "4Mk1N5fZHczfBgoC8ajs3ti286kJxpyxW7F33aXJ";

  img: any;

  constructor(  
    private http: HttpClient,
    private httpClientModule: HttpClientModule,
  ) {}

  getSSCimage() {
    return this.http.get<any>(`https://sscweb.gsfc.nasa.gov/WS/sscr/2/key=${this.nasaApiKey}`)
      .subscribe(img => { 
        this.img = img 
      });
  }

  getProbesInfo() {
    return this.http.get<any>("assets/probeJson.json")
      .pipe(map(probe => probe));
  }
}

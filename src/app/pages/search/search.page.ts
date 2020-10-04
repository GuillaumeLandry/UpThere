import { Component, OnInit } from '@angular/core';
import { ProbeService } from 'src/app/services/probe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  probes=[
    {
      img: "",
      name: "Himawari-9",
      country: "Japan",
      purpose: "Himawari-9",
      description: ""
    },    
    {
      img: "",
      name: "NOAA-18",
      country: "USA",
      purpose: "Himawari-9",
      description: "er geg aewgea rg aewrg"
    },
    {
      img: "",
      name: "Anik F1",
      country: "Canada",
      purpose: "Himawari-9",
      description: "sefwaefawff"
    },
    {
      img: "",
      name: "Anik F1",
      country: "Canada",
      purpose: "Himawari-9",
      description: "wea fawefa werfaerfaerfea rf"
    },
    {
      img: "",
      name: "Anik F1",
      country: "Canada",
      purpose: "Himawari-9",
      description: "aer aer aerf aergaerg aer"
    },
    {
      img: "",
      name: "Anik F1",
      country: "Canada",
      purpose: "Himawari-9",
      description: "gearg earg earg erg erg arg"
    },
  ]
  constructor(
    private probeService: ProbeService
  ) { }

  ngOnInit() {
  }

  onProbeClick() {
    console.log("probeClicked")
  }

}

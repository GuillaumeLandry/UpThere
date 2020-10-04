import { Component, OnInit } from '@angular/core';
import { ProbeService } from 'src/app/services/probe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  probes: any; /*
    {
      img: "",
      name: "Himawari-9",
      country: "Japan",
      category: "Himawari-9",
      description: ""
    },    
    {
      img: "",
      name: "NOAA-18",
      country: "USA",
      category: "Himawari-9",
      description: "er geg aewgea rg aewrg"
    },
    {
      img: "",
      name: "Anik F1",
      country: "Canada",
      category: "Himawari-9",
      description: "sefwaefawff"
    },
    {
      img: "",
      name: "Anik F1",
      country: "Canada",
      category: "Himawari-9",
      description: "wea fawefa werfaerfaerfea rf"
    },
    {
      img: "",
      name: "Anik F1",
      country: "Canada",
      category: "Himawari-9",
      description: "aer aer aerf aergaerg aer"
    },
    {
      img: "",
      name: "Anik F1",
      country: "Canada",
      category: "Himawari-9",
      description: "gearg earg earg erg erg arg"
    },
  ]*/
  constructor(
    private probeService: ProbeService
  ) { }

  ngOnInit() {
    const arr = [];
    this.probes = this.probeService.getProbesInfo();
    for (let i of this.probes) {
      arr.push(i);
    }
    console.log(arr);
  }

  onProbeClick() {
    console.log("probeClicked")
  }

}

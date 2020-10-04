import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  probes=[
    {
      img: "../assets/probe-images/Himawari-9.png",
      name: "Himawari-9",
      country: "Japan",
      purpose: "Meteorology",
      description: "Equipped with highly improved Advanced Himawari Imagers (AHIs).",
      url:"https://directory.eoportal.org/web/eoportal/satellite-missions/h/himawari-8-9"
    },    
    {
      img: "../assets/probe-images/NOAA-18.png",
      name: "NOAA-18",
      country: "USA",
      purpose: "Meteorology",
      description: "",
      url:"https://directory.eoportal.org/web/eoportal/satellite-missions/n/noaa-poes-series-5th-generation"
    },
    {
      img: "../assets/probe-images/Anik F1.png",
      name: "Anik F1",
      country: "Canada",
      purpose: "Communications",
      description: "",
      url:"https://space.skyrocket.de/doc_sdat/anik-f1.htm"
    },
    {
      img: "../assets/probe-images/Es'hail 1.png",
      name: "Es'hail 1",
      country: "Multinational",
      purpose: "Communications",
      description: "Partnership between Eutelsat and the Doha-based Es’hailSat,\
       the Qatar Satellite Company - the first of a planned fleet for Qatar. In 2018\
        Eutelsat sold its interest in the satellite to Es'hailSat, now the sole owner.",
      url:"https://www.eshailsat.qa/en/satellites"
    },
    {
      img: "../assets/probe-images/Sirius 1.png",
      name: "Sirius 1",
      country: "USA",
      purpose: "Communications",
      description: "Relay music, news, entertainment directly to motorists in the USA;\
       a fourth satellite is stored on the ground for rapid replacement, if necessary.",
      url:"https://space.skyrocket.de/doc_sdat/sirius-cdr.htm"
    },
    {
      img: "../assets/probe-images/Spaceway 3.png",
      name: "Spaceway 3",
      country: "USA",
      purpose: "Communications",
      description: "",
      url:"https://www.hughes.com/technologies/hughes-high-throughput-satellite-constellation/spaceway-3"
    },
    {
      img: "../assets/probe-images/Galileo FM10.png",
      name: "Galileo FM10",
      country: "ESA",
      purpose: "Navigation/Positionning",
      description: "",
      url:"https://space.skyrocket.de/doc_sdat/galileo-foc.htm"
    },
    {
      img: "../assets/probe-images/USA-289.png",
      name: "USA-289",
      country: "USA",
      purpose: "Navigation/Positionning",
      description: "First of third generation.",
      url:"https://defpost.com/tag/usa-289/"
    },
    {
      img: "../assets/probe-images/Hubble Space Telescope.png",
      name: "Hubble Space Telescope",
      country: "ESA/USA",
      purpose: "Space Science",
      description: "Exploration of space.",
      url:"https://hubblesite.org"
    },
    {
      img: "../assets/probe-images/International Space Station.png",
      name: "International Space Station",
      country: "Multinational",
      purpose: "Space Science",
      description: "Final size of a Boeing 747; first component.",
      url:"https://www.nasa.gov/mission_pages/station/main/index.html"
    },
    {
      img: "../assets/probe-images/Interstellar Boundary Explorer.png",
      name: "Interstellar Boundary Explorer",
      country: "USA",
      purpose: "Monitor the boundary between heliosphere and interstellar medium.",
      description: "",
      url:"https://www.nasa.gov/mission_pages/ibex/index.html"
    },
    {
      img: "../assets/probe-images/Terra.png",
      name: "Terra",
      country: "USA/Canada/Japan",
      purpose: "Earth Observation",
      description: "",
      url:"https://terra.nasa.gov"
    },
    {
      img: "../assets/probe-images/Aqua.png",
      name: "Aqua",
      country: "USA/Japan/Brazil",
      purpose: "Earth Observation",
      description: "Six-year chronology of the planet and its hydrological processes.",
      url:"https://aqua.nasa.gov"
    },
    {
      img: "../assets/probe-images/Landsat 7.png",
      name: "Landsat 7",
      country: "USA",
      purpose: "Earth Observation",
      description: "Remote sensing; polar orbit.",
      url:"https://www.usgs.gov/core-science-systems/nli/landsat/landsat-7?qt-science_support_page_related_con=0#qt-science_support_page_related_con"
    },
    {
      img: "../assets/probe-images/Proba 5.png",
      name: "Proba 5",
      country: "ESA",
      purpose: "Earth Observation",
      description: "Map land cover and vegetation growth.",
      url:"https://earth.esa.int/web/eoportal/satellite-missions/p/proba-v"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  onProbeClick(url) {
    window.location.href=(url);
  }

}

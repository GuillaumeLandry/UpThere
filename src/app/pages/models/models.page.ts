import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.page.html',
  styleUrls: ['./models.page.scss'],
})
export class ModelsPage implements OnInit {

  selectedModel: string;

  constructor() { }

  ngOnInit() {}
  
  segmentChanged(model) {
    this.selectedModel = model;
    console.log(this.selectedModel)
  }

}

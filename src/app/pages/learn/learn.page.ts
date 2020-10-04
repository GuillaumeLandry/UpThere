import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
})
export class LearnPage implements OnInit {

  selectedTab: string;

  constructor() { }

  ngOnInit() {}

  segmentChanged(selectedTab: string) {
    this.selectedTab = selectedTab;
  }

}

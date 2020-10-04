import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

const { SplashScreen, StatusBar  } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/pages/Home',
      icon: 'globe'
    },
    {
      title: 'Over',
      url: '/pages/Over',
      icon: 'planet'
    },
    {
      title: 'Learn',
      url: '/pages/Learn',
      icon: 'school'
    },
    {
      title: 'Search',
      url: '/pages/Search',
      icon: 'search'
    },
    {
      title: 'About',
      url: 'pages/About',
      icon: 'information-circle'
    },
  ];
  public labels = ['NASA', 'CSA', 'JAXA', 'CNES', 'EESA'];

  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.hide();
      SplashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('pages/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}

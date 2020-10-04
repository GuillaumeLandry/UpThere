import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('pages/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}

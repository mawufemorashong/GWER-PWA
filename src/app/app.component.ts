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
      url: 'home',
      icon: 'home'
    },
    {
      title: 'About Us',
      url: 'about-us',
      icon: 'business'
    },
    {
      title: 'Latest Releases',
      url: 'report-volumes',
      icon: 'newspaper'
    },
    {
      title: 'Editoral Policy',
      url: '/folder/Outbox',
      icon: 'information-circle'
    },
    {
      title: 'Guideline for Authors',
      url: '/folder/Outbox',
      icon: 'reader'
    },
    {
      title: 'Contact Us',
      url: 'contact-us',
      icon: 'paper-plane'
    },
    {
      title: 'Share',
      url: '/folder/Outbox',
      icon: 'share-social'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.changeTheme();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }

  public changeTheme() {
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    document.body.setAttribute('data-theme', 'light');
  }
  
  public colorTest(systemInitiatedDark) {
    document.body.setAttribute('data-theme', 'light');
  }
}

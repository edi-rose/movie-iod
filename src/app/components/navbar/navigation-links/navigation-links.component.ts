import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.scss']
})
export class NavigationLinksComponent implements OnInit {

  constructor() { }

  ShowWhoAreWe = false;
  ShowOurYear = false;
  ShowFaces = false;


  ngOnInit() {
  }

  isTabDark() {
    return window.location.pathname === '/home' ? 'darkTab' : 'lightTab'
  }

  toggleWhoAreWe() {
    this.ShowWhoAreWe = !this.ShowWhoAreWe;
  }

  toggleOurYear() {
    this.ShowOurYear = !this.ShowOurYear;
  }

  toggleShowFaces() {
    this.ShowFaces = !this.ShowFaces;
  }

  isDesktop() {
    return screen.width > 770;
  }
}

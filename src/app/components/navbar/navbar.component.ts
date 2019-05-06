import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isMenuExpanded = false;

  ShowWhoAreWe = false;
  ShowOurYear = false;
  ShowFaces = false;

  constructor(private router: Router) {
    router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationStart) {
        this.isMenuExpanded = false;
      }
    })
  }

  ngOnInit() {
  }

  getNavBarClass() {
    let url = window.location.pathname
    let screenSize = screen.width
    let navbarClass = ''

    if (url === '/home') {
      return navbarClass = 'homepageNavBar'
    } else if (url === '/our-branch-network') {
      return navbarClass = 'bluePageNavBar'
    } else if (screenSize > 770) {
      return navbarClass = 'desktopNavBar'
    }
  }

  toggleMenu() {
    this.ShowFaces = false;
    this.ShowOurYear = false;
    this.ShowWhoAreWe = false;
    this.isMenuExpanded = !this.isMenuExpanded;
  }

  isTabDark() {
    return window.location.pathname === '/home' ? 'darkTab' : 'lightTab'
  }


  toggleWhoAreWe() {
    this.ShowWhoAreWe = !this.ShowWhoAreWe;
    this.ShowFaces = false;
    this.ShowOurYear = false;
  }

  toggleOurYear() {
    this.ShowOurYear = !this.ShowOurYear;
    this.ShowFaces = false;
    this.ShowWhoAreWe = false;
  }

  toggleShowFaces() {
    this.ShowFaces = !this.ShowFaces;
    this.ShowOurYear = false;
    this.ShowWhoAreWe = false;
  }

  isDesktop() {
    if (screen.width > 770) {
      return true;
    }
    return false;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'institute-of-directors';
  backgroundImageClass: string;

  ngOnInit() {
  }

  getBackgroundClass() {
    let url = window.location.pathname
    let backgroundImageClass
    switch(url) {
      case '/home':
        return backgroundImageClass = 'backgroundImage homeBackgroundImage';
        break;
      case '/committees':
        return backgroundImageClass = 'backgroundImage committeesBackgroundImage';
        break;
      case '/our-members':
        return backgroundImageClass = 'backgroundImage membersBackgroundImage';
        break;
      case '/our-branch-network':
        return backgroundImageClass = 'blueBackground';
        break;
      case '/from-the-president':
        return backgroundImageClass = 'greyBackground';
        break;
      case '/from-the-ceo':
        return backgroundImageClass = 'greyBackground';
        break;
      case '/snapshot-of-our-year':
        return backgroundImageClass = 'backgroundImage snapshotBackgroundImage';
        break;
      case '/raising-standards':
        return backgroundImageClass = 'backgroundImage raisingStandardsBackgroundImage';
        break;
    }
  }

  getShowOrHideFooter() {
    let url = window.location.pathname
    return url === '/home' ? 'visually-hidden' : 'show'
  }
}

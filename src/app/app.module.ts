import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2OdometerModule } from 'ng2-odometer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OurCouncilComponent } from './pages/who-we-are/our-council/our-council.component';
import { FooterComponent } from './components/footer/footer.component';
import { FromThePresidentComponent } from './pages/from-the-president/from-the-president.component';
import { OurMembersComponent } from './pages/who-we-are/our-members/our-members.component';
import { OurBranchNetworkComponent } from './pages/who-we-are/our-branch-network/our-branch-network.component';
import { CommitteesComponent } from './pages/who-we-are/committees/committees.component';
import { FromTheCeoComponent } from './pages/from-the-ceo/from-the-ceo.component';
import { SnapshotOfOurYearComponent } from './pages/our-year/snapshot-of-our-year/snapshot-of-our-year.component';
import { ThoughtLeadershipComponent } from './pages/our-year/thought-leadership/thought-leadership.component';
import { RaisingStandardsComponent } from './pages/our-year/raising-standards/raising-standards.component';
import { InspireAndEquipComponent } from './pages/our-year/inspire-and-equip/inspire-and-equip.component';
import { BuildEngagementComponent } from './pages/our-year/build-engagement/build-engagement.component';
import { GovernanceFocusComponent } from './pages/our-year/governance-focus/governance-focus.component';
import { CoreEnablersComponent } from './pages/our-year/core-enablers/core-enablers.component';
import { FacesOfGovernanceTemplateComponent } from './components/faces-of-governance-template/faces-of-governance-template.component';
import { SimonBerryComponent } from './pages/faces-of-governance/simon-berry/simon-berry.component';
import { WarwickTauwhareGeorgeComponent } from './pages/faces-of-governance/warwick-tauwhare-george/warwick-tauwhare-george.component';
import { LaurissaCooneyComponent } from './pages/faces-of-governance/laurissa-cooney/laurissa-cooney.component';
import { MicheleFreyComponent } from './pages/faces-of-governance/michele-frey/michele-frey.component';
import { BreccanMcleodLundyComponent } from './pages/faces-of-governance/breccan-mcleod-lundy/breccan-mcleod-lundy.component';
import { MenaAntonioComponent } from './pages/faces-of-governance/mena-antonio/mena-antonio.component';
import { NavigationLinksComponent } from './components/navbar/navigation-links/navigation-links.component';
import { StatBlockComponent } from './pages/our-year/snapshot-of-our-year/stat-block/stat-block.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    OurCouncilComponent,
    FooterComponent,
    FromThePresidentComponent,
    OurMembersComponent,
    OurBranchNetworkComponent,
    CommitteesComponent,
    FromTheCeoComponent,
    SnapshotOfOurYearComponent,
    ThoughtLeadershipComponent,
    RaisingStandardsComponent,
    InspireAndEquipComponent,
    BuildEngagementComponent,
    GovernanceFocusComponent,
    CoreEnablersComponent,
    FacesOfGovernanceTemplateComponent,
    SimonBerryComponent,
    WarwickTauwhareGeorgeComponent,
    LaurissaCooneyComponent,
    MicheleFreyComponent,
    BreccanMcleodLundyComponent,
    MenaAntonioComponent,
    NavigationLinksComponent,
    StatBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2OdometerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

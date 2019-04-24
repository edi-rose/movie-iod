import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { CommitteesComponent } from './pages/who-we-are/committees/committees.component';
import { OurBranchNetworkComponent } from './pages/who-we-are/our-branch-network/our-branch-network.component';
import { OurCouncilComponent } from './pages/who-we-are/our-council/our-council.component';
import { OurMembersComponent } from './pages/who-we-are/our-members/our-members.component';
import { FromThePresidentComponent } from './pages/from-the-president/from-the-president.component';
import { FromTheCeoComponent } from './pages/from-the-ceo/from-the-ceo.component';
import { BuildEngagementComponent } from './pages/our-year/build-engagement/build-engagement.component';
import { CoreEnablersComponent } from './pages/our-year/core-enablers/core-enablers.component';
import { GovernanceFocusComponent } from './pages/our-year/governance-focus/governance-focus.component';
import { InspireAndEquipComponent } from './pages/our-year/inspire-and-equip/inspire-and-equip.component';
import { RaisingStandardsComponent } from './pages/our-year/raising-standards/raising-standards.component';
import { SnapshotOfOurYearComponent } from './pages/our-year/snapshot-of-our-year/snapshot-of-our-year.component';
import { ThoughtLeadershipComponent } from './pages/our-year/thought-leadership/thought-leadership.component';
import { FacesOfGovernanceTemplateComponent } from './components/faces-of-governance-template/faces-of-governance-template.component';
import { BreccanMcleodLundyComponent } from './pages/faces-of-governance/breccan-mcleod-lundy/breccan-mcleod-lundy.component';
import { LaurissaCooneyComponent } from './pages/faces-of-governance/laurissa-cooney/laurissa-cooney.component';
import { MenaAntonioComponent } from './pages/faces-of-governance/mena-antonio/mena-antonio.component';
import { MicheleFreyComponent } from './pages/faces-of-governance/michele-frey/michele-frey.component';
import { SimonBerryComponent } from './pages/faces-of-governance/simon-berry/simon-berry.component';
import { WarwickTauwhareGeorgeComponent } from './pages/faces-of-governance/warwick-tauwhare-george/warwick-tauwhare-george.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'committees', component: CommitteesComponent },
  { path: 'our-branch-network', component: OurBranchNetworkComponent },
  { path: 'our-council', component: OurCouncilComponent },
  { path: 'our-members', component: OurMembersComponent },
  { path: 'from-the-president', component: FromThePresidentComponent },
  { path: 'from-the-ceo', component: FromTheCeoComponent },
  { path: 'build-engagement', component: BuildEngagementComponent },
  { path: 'core-enablers', component: CoreEnablersComponent },
  { path: 'governance-focus', component: GovernanceFocusComponent },
  { path: 'inspire-and-equip', component: InspireAndEquipComponent },
  { path: 'raising-standards', component: RaisingStandardsComponent },
  { path: 'snapshot-of-our-year', component: SnapshotOfOurYearComponent },
  { path: 'thought-leadership', component: ThoughtLeadershipComponent },
  { path: 'faces-of-governance/breccan-mcleod-lundy', component: BreccanMcleodLundyComponent },
  { path: 'faces-of-governance/laurissa-cooney', component: LaurissaCooneyComponent },
  { path: 'faces-of-governance/mena-antonio', component: MenaAntonioComponent },
  { path: 'faces-of-governance/michele-frey', component: MicheleFreyComponent },
  { path: 'faces-of-governance/simon-berry', component: SimonBerryComponent },
  { path: 'faces-of-governance/warwick-tauwhare-george', component: WarwickTauwhareGeorgeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

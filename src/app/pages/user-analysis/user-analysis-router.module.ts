import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {InterestDistributionComponent} from './interest-distribution/interest-distribution.component';
import {UserAnalysisComponent} from './user-analysis.component';
import {UserOverviewComponent} from './user-overview/user-overview.component';
import {TimeAnalysisComponent} from './time-analysis/time-analysis.component';
import {UsageStatisticsComponent} from "./usage-statistics/usage-statistics.component";

const routes: Routes = [{
  path: '',
  component: UserAnalysisComponent,
  children: [{
    path: 'interest',
    component: InterestDistributionComponent,
  }, {
    path: 'all',
    component: UserOverviewComponent,
  }, {
    path: 'time',
    component: TimeAnalysisComponent,
  }, {
    path: 'status',
    component: UsageStatisticsComponent,
  },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAnalysisRouterModule {
}

export const routedComponents = [
  UserAnalysisComponent,
  InterestDistributionComponent,
  UserOverviewComponent,
  TimeAnalysisComponent,
  UsageStatisticsComponent,
];

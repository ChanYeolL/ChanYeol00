import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {InterestDistributionComponent} from './interest-distribution/interest-distribution.component';
import {UserAnalysisComponent} from './user-analysis.component';
import {UserOverviewComponent} from './user-overview/user-overview.component';
import {TimeAnalysisComponent} from './time-analysis/time-analysis.component';
import {UsageStatisticsComponent} from './usage-statistics/usage-statistics.component';
import {UsesHistoryComponent} from './uses-history/uses-history.component';
import {UseNumberComponent} from './use-number/use-number.component';
import {DataPickerComponent} from '../data-picker/data-picker.component';

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
  }, {
    path: 'history',
    component: UsesHistoryComponent,
  }, {
    path: 'number',
    component: UseNumberComponent,
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
  UsesHistoryComponent,
  UseNumberComponent,
];

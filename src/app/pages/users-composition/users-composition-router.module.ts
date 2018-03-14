import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersCompositionComponent} from './users-composition.component';
import {UsersOverviewComponent} from './users-overview/users-overview.component';
import {InterestsDistributionComponent} from './interests-distribution/interests-distribution.component';
import {GeographicalDistributionComponent} from './geographical-distribution/geographical-distribution.component';
import {TimeSegmentationComponent} from './time-segmentation/time-segmentation.component';
import {TimeIntervalComponent} from './time-interval/time-interval.component';

const routes: Routes = [{
  path: '',
  component: UsersCompositionComponent,
  children: [{
    path: 'all',
    component: UsersOverviewComponent,
  }, {
    path: 'interest',
    component: InterestsDistributionComponent,
  }, {
    path: 'area',
    component: GeographicalDistributionComponent,
  }, {
    path: 'segment',
    component: TimeSegmentationComponent,
  }, {
    path: 'interval',
    component: TimeIntervalComponent,
  },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersCompositionRouterModule {
}

export const routedComponents = [
  UsersCompositionComponent,
  UsersOverviewComponent,
  InterestsDistributionComponent,
  GeographicalDistributionComponent,
  TimeSegmentationComponent,
  TimeIntervalComponent,
];

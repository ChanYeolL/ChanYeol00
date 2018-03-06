import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {TestComponent} from './test/test.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'echarts',
      loadChildren: './echarts/echarts.module#EchartsModule',
    }, {
      path: 'maps',
      loadChildren: './maps/maps.module#MapsModule',
    },
    {
      path: 'test',
      loadChildren: './test/test.module#TestModule',
    },
    {
      path: 'user',
      loadChildren: './user-analysis/user-analysis.module#UserAnalysisModule',
    },
    {
      path: '',
      redirectTo: 'echarts',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

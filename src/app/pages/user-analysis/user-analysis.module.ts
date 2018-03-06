import {NgModule} from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {routedComponents, UserAnalysisRouterModule} from './user-analysis-router.module';
import {UserAnalysisComponent} from './user-analysis.component';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  imports: [
    ThemeModule,
    UserAnalysisRouterModule,
    NgxEchartsModule,
  ],
  exports: [UserAnalysisComponent],
  declarations: [...routedComponents],
})
export class UserAnalysisModule {
}

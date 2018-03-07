import {NgModule} from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {routedComponents, UserAnalysisRouterModule} from './user-analysis-router.module';
import {UserAnalysisComponent} from './user-analysis.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {TablesModule} from "../tables/tables.module";

@NgModule({
  imports: [
    ThemeModule,
    UserAnalysisRouterModule,
    NgxEchartsModule,
    TablesModule,
  ],
  exports: [UserAnalysisComponent],
  declarations: [...routedComponents],
})
export class UserAnalysisModule {
}

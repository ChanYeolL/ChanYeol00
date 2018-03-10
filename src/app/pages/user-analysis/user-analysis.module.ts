import {NgModule} from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {routedComponents, UserAnalysisRouterModule} from './user-analysis-router.module';
import {UserAnalysisComponent} from './user-analysis.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {TablesModule} from '../tables/tables.module';
import {DataPickerModule} from "../data-picker/data-picker.module";

@NgModule({
  imports: [
    ThemeModule,
    UserAnalysisRouterModule,
    NgxEchartsModule,
    TablesModule,
    DataPickerModule,
  ],
  exports: [UserAnalysisComponent],
  declarations: [...routedComponents],
})
export class UserAnalysisModule {
}

import {NgModule} from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';

import {ThemeModule} from '../../@theme/theme.module';

import {TestRouterModule} from './test-router.module';
import {TestComponent} from './test.component';
import {TablesModule} from '../tables/tables.module';

@NgModule({
  imports: [ThemeModule, TestRouterModule, NgxEchartsModule, TablesModule],
  declarations: [TestComponent],
  exports: [TestComponent],
})
export class TestModule {
}

import {NgModule} from '@angular/core';
import {AngularEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ChartModule} from 'angular2-chartjs';

import {ThemeModule} from '../../@theme/theme.module';

import {EchartsLineComponent} from './echarts-line.component';
import {EchartsPieComponent} from './echarts-pie.component';
import {EchartsBarComponent} from './echarts-bar.component';
import {EchartsMultipleXaxisComponent} from './echarts-multiple-xaxis.component';
import {EchartsAreaStackComponent} from './echarts-area-stack.component';
import {EchartsBarAnimationComponent} from './echarts-bar-animation.component';
import {EchartsRadarComponent} from './echarts-radar.component';
import {EchartsRouterModule} from './echarts-router.module';
import {EchartsComponent} from './echarts.component';

const components = [
  EchartsLineComponent,
  EchartsPieComponent,
  EchartsBarComponent,
  EchartsMultipleXaxisComponent,
  EchartsAreaStackComponent,
  EchartsBarAnimationComponent,
  EchartsRadarComponent,
];

@NgModule({
  imports: [ThemeModule, EchartsRouterModule, AngularEchartsModule, NgxChartsModule, ChartModule],
  declarations: [EchartsComponent, ...components],
  exports: [EchartsComponent],
})
export class EchartsModule {
}

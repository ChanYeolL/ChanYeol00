import {NgModule} from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';

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
  imports: [ThemeModule, EchartsRouterModule, NgxEchartsModule],
  declarations: [EchartsComponent, ...components],
  exports: [EchartsComponent, EchartsPieComponent],
})
export class EchartsModule {
}

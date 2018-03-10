import {NgModule} from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {TablesModule} from '../tables/tables.module';
import {
  routedComponents, UsersCompositionRouterModule,
} from './users-composition-router.module';
import {UsersCompositionComponent} from './users-composition.component';
import {DataPickerModule} from '../data-picker/data-picker.module';
import {LeafletModule} from '@asymmetrik/angular2-leaflet';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot(),
    LeafletModule.forRoot(),
    UsersCompositionRouterModule,
    NgxEchartsModule,
    TablesModule,
    DataPickerModule,
  ],
  exports: [UsersCompositionComponent],
  declarations: [...routedComponents],
})
export class UsersCompositionModule {
}

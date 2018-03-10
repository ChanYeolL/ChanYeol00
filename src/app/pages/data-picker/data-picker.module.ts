import {NgModule} from '@angular/core';
import {Daterangepicker} from 'ng2-daterangepicker';
import {DataPickerComponent} from './data-picker.component';

@NgModule({
  imports: [
    Daterangepicker,
  ],
  declarations: [
    DataPickerComponent,
  ],
  exports: [
    DataPickerComponent,
  ],
})
export class DataPickerModule {
}

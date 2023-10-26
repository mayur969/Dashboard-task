import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppTopSectionComponent } from './Components/top-section/top-section.component';
import { AppBottomGridComponent } from './Components/bottom-grid/bottom-grid.component';
import { ApiService } from './shared/services/api-services';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EditDialogComponent } from './shared/dialog/edit-dialog-component/edit-dialog.component';
import { DeleteDialogComponent } from './shared/dialog/delete-dialog-component/delete-dialog.component';
import { AppSideBarComponent } from './Components/side-bar/side-bar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more'; 
import SolidGauge from 'highcharts/modules/solid-gauge';

HighchartsMore(Highcharts);
SolidGauge(Highcharts);

@NgModule({
  declarations: [
    AppComponent,
    AppTopSectionComponent,
    AppBottomGridComponent,
    AppSideBarComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule,
    NgxChartsModule,
    HighchartsChartModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadarchartPageRoutingModule } from './radarchart-routing.module';

import { RadarchartPage } from './radarchart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadarchartPageRoutingModule
  ],
  declarations: [RadarchartPage]
})
export class RadarchartPageModule {}

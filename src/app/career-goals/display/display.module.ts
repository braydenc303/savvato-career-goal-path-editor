import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayPageRoutingModule } from './display-routing.module';

import { SavvatoCareerpathComponentModule } from '@savvato-software/savvato-careerpath-component'

import { DisplayPage } from './display.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayPageRoutingModule,
    SavvatoCareerpathComponentModule
  ],
  declarations: [DisplayPage]
})
export class DisplayPageModule {}

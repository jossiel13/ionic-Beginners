import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeacherPageRoutingModule } from './seacher-routing.module';

import { SeacherPage } from './seacher.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipeModule } from 'src/app/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeacherPageRoutingModule,
    ComponentsModule,
    PipeModule,
    ComponentsModule

  ],
  declarations: [SeacherPage]
})
export class SeacherPageModule {}

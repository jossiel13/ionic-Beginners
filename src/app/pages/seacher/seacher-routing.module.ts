import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeacherPage } from './seacher.page';

const routes: Routes = [
  {
    path: '',
    component: SeacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeacherPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputPlobremPage } from './input-plobrem.page';

const routes: Routes = [
  {
    path: '',
    component: InputPlobremPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputPlobremPageRoutingModule {}

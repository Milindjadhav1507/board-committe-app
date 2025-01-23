import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XintegrationwithAppComponent } from './xintegrationwith-app/xintegrationwith-app.component';

const routes: Routes = [
  { path: 'integrationapps', component: XintegrationwithAppComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }

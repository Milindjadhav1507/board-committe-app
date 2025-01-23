import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XintegrationwithAppComponent } from './xintegrationwith-app/xintegrationwith-app.component';
import { XsettingsComponent } from './xsettings/xsettings.component';

const routes: Routes = [
  { path: 'integrationapps', component: XintegrationwithAppComponent },
  { path: 'settings', component: XsettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }

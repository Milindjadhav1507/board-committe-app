import { Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MeetingComponent } from './Components/meeting/meeting.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TeamComponent } from './Components/team/team.component';
import { ReportComponent } from './Components/report/report.component';
import { ReportsComponent } from './Components/reports/reports.component';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },

  //   {
  //     path: 'home',
  //     loadComponent: () => import('./Components/home/home.component'),
  //   },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'meeting',
    component: MeetingComponent,
  }, 
  {
    path: 'team',
    component: TeamComponent,
  }, 
  {
    path: 'report',
    component: ReportComponent,
  }, 
  {
    path: 'report',
    component: ReportComponent,
  }, 
  {
    path: 'project_boards_overview',
    component: ReportsComponent,
  }, 

];

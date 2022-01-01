import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './Components/employees/employees.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { UploadComponent } from './Components/upload/upload.component';
import { AuthguardGuard } from './services/authguard.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [AuthguardGuard]
    
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'upload',
    component: UploadComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: '**',
    component: EmployeesComponent,
    canActivate: [AuthguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

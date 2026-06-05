import { Routes } from '@angular/router';
import { LoginRegister } from './main/login/login-register/login-register';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'mess-owner-form',
        pathMatch: 'full'
    },
    {
        path: 'login-register',
        component: LoginRegister,
    },
    {
        path: 'mess-owner-form',
        loadChildren: () => import('./main/messowner/mess-owner-form/messform.route').then(m => m.routes)
    },
    {
        path: 'mess-owner-dashboard',
        loadChildren: () => import('./main/messowner/mess-owner-dashboard/messownerdashboards.routes').then(m => m.routes)
    },
    {
      path: 'customer-home',
      loadChildren: () => import('./main/customer/customer-home/customerhome.route').then(m => m.routes)
    }
];

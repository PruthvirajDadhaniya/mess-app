import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'mess-owner-form',
        pathMatch: 'full'
    },
    {
        path: 'mess-owner-form',
        loadChildren: () => import('./main/messowner/mess-owner-form/messform.route').then(m => m.routes)
    }
];

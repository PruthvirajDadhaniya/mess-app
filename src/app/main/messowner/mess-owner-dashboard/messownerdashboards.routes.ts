import { Routes } from '@angular/router';
import { Charts } from './componets/charts/charts';
import { MessOwnerDashboard } from './mess-owner-dashboard';

export const dashboardRoutes: Routes = [
    {
        path: '',
        component: MessOwnerDashboard,
        children: [
            {
                path: '',
                redirectTo: 'charts',
                pathMatch: 'full'
            },
            {
                path: 'charts',
                component: Charts,
            },
            {
                path: 'details',
                loadComponent: () =>
                    import('./componets/details/details').then(m => m.Details)
            },
            {
                path: 'feedback',
                loadComponent: () =>
                    import('./componets/feedback/feedback').then(m => m.Feedback)
            },
            {
                path: 'menu',
                loadComponent: () =>
                    import('./componets/menu/menu').then(m => m.Menu)
            },
            {
                path: 'price',
                loadComponent: () =>
                    import('./componets/price/price').then(m => m.Price)
            },
            {
                path: 'time',
                loadComponent: () =>
                    import('./componets/time/time').then(m => m.Time)
            }
        ]
    }
];
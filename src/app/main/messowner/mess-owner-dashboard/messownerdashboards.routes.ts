import { Routes } from '@angular/router';

export const routes: Routes = [
    
            {
                path: 'menu',
                loadComponent: () =>
                    import('./dashboard/menu/menu')
                        .then(m => m.Menu)
            },
            {
                path: 'charts',
                loadComponent: () => import('./dashboard/charts/charts').then(m => m.Charts)
            },
            {
                path: 'details',
                loadComponent: () => import('./dashboard/details/details').then(m => m.Details)
            },
            {
                path: 'menu',
                loadComponent: () => import('./dashboard/menu/menu').then(m => m.Menu)
            },
            {
                path: 'price',
                loadComponent: () => import('./dashboard/price/price').then(m => m.Price)
            },
            {
                path: 'time',
                loadComponent: () => import('./dashboard/time/time').then(m => m.Time)
            },
            {
                path: 'feedback',
                loadComponent: () => import('./dashboard/feedback/feedback').then(m => m.Feedback)
            },

    {
        path: 'navbar',
        loadComponent: () => import('./navbar/navbar').then(m => m.Navbar)
    },
    {
        path: 'sidenav',
        loadComponent: () => import('./sidenav/sidenav').then(m => m.Sidenav)
    },


];

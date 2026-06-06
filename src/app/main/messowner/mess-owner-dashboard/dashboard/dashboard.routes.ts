import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
        path: '',
        loadComponent: () => import('./dashboard').then(m => m.Dashboard)
    },
    {
        path: 'charts',
        loadComponent: () => import('./charts/charts').then(m => m.Charts)
    },
    {
        path: 'details',
        loadComponent: () => import('./details/details').then(m => m.Details)
    },
    {
        path: 'menu',
        loadComponent: () => import('./menu/menu').then(m => m.Menu)
    },
    {   
        path: 'price',
        loadComponent: () => import('./price/price').then(m => m.Price)
    },
    {
        path: 'time',
        loadComponent: () => import('./time/time').then(m => m.Time)
    },
    {
        path: 'feedback',
        loadComponent: () => import('./feedback/feedback').then(m => m.Feedback)
    }

    
]
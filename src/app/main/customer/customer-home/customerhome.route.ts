import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./customer-home').then(m => m.CustomerHome) },
    {
        path: 'header',
        loadComponent: () => import('./header/header').then(m => m.Header)
    },
      {
        path: 'content',
        loadComponent: () => import('./content/content').then(m => m.Content)
    },
    {
        path: 'footer',
        loadComponent: () => import('./footer/footer').then(m => m.Footer)
    },
]
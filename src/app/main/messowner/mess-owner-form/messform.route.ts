import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./mess-owner-form').then(m => m.MessOwnerForm)
    },
    {
        path: 'mess-details-form',
        loadComponent: () => import('./mess-details-form/mess-details-form').then(m => m.MessDetailsForm)
    },
    {
        path: 'mess-menu-form',
        loadComponent: () => import('./mess-menu-form/mess-menu-form').then(m => m.MessMenuForm)
    },
    {
        path: 'mess-price-form',
        loadComponent: () => import('./mess-price-form/mess-price-form').then(m => m.MessPriceForm)
    },
    {
        path: 'mess-time-form',
        loadComponent: () => import('./mess-time-form/mess-time-form').then(m => m.MessTimeForm)
    },


];

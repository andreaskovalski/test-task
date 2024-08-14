import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'lazy', pathMatch: 'full' },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyRoutingModule)
  },
];

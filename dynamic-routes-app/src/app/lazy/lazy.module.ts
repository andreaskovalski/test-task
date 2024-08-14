import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LazyComponent } from './lazy.component';
import {DynamicComponent} from "./dynamic/dynamic.component";

const routes: Routes = [
  { path: '', component: LazyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModule {
  constructor(private router: Router) {
    this.addDynamicRoutes();
  }

  private addDynamicRoutes() {
    const additionalRoutes: Routes = [
      { path: 'dynamic', component: DynamicComponent },
    ];
    this.router.config.push(...additionalRoutes);
  }
}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./Pages/home/home.module').then(m => m.HomePageModule)},
  { path: 'create', loadChildren: './Pages/create/create.module#CreatePageModule' },
  { path: 'pruebas', loadChildren: './Pages/pruebas/pruebas.module#PruebasPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

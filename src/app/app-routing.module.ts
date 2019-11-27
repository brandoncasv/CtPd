import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', loadChildren:'./Pages/home/home.module#HomePageModule'},
  { path: 'create', loadChildren: './Pages/create/create.module#CreatePageModule' },
  { path: 'pruebas', loadChildren: './Pages/pruebas/pruebas.module#PruebasPageModule' },
  { path: 'details-contact/:id', loadChildren: './Pages/details-contact/details-contact.module#DetailsContactPageModule' },
  { path: 'details-contact', loadChildren: './Pages/details-contact/details-contact.module#DetailsContactPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

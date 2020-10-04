import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {
    path: '', component: HomeModule
  },
  {path: 'pages/Home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule)},
  {path: 'pages/Over', loadChildren: () => import('./pages/over/over.module').then( m => m.OverModule)},
  {path: 'pages/About', loadChildren: () => import('./pages/about/about.module').then( m => m.AboutModule)},
  {path: 'pages/Learn', loadChildren: () => import('./pages/learn/learn.module').then( m => m.LearnModule)},
  {path: 'pages/Search', loadChildren: () => import('./pages/search/search.module').then( m => m.SearchModule)},
  {path: 'pages/Models', loadChildren: () => import('./pages/models/models.module').then( m => m.ModelsModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

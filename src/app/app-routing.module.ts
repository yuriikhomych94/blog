import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'menu/:topic', component: MenuComponent },
  { path: 'menu/:topic/:id', component: ArticleDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

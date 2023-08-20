import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { ArticlesComponent } from './Pages/articles/articles.component';
import { ProyectsComponent } from './Pages/proyects/proyects.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'proyects', component: ProyectsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

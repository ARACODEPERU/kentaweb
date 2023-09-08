import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ServicesComponent } from './Pages/services/services.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { ArticlesComponent } from './Pages/articles/articles.component';
import { ProyectsComponent } from './Pages/proyects/proyects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'proyects', component: ProyectsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'article/:slug', component: ArticlesComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

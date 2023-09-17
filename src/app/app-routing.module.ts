import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './Paginas/inicio/inicio.component';
import { NosotrosComponent } from './Paginas/nosotros/nosotros.component';
import { ServiciosComponent } from './Paginas/servicios/servicios.component';

import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ServicesComponent } from './Pages/services/services.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { ArticlesComponent } from './Pages/articles/articles.component';
import { ProyectsComponent } from './Pages/proyects/proyects.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
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

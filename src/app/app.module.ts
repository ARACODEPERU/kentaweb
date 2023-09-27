import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigColorComponent } from './Widgets/config-color/config-color.component';

import { formatDateString } from './Pipes/formatDateString';
import { ReactiveFormsModule } from '@angular/forms';

/*--------------------- PAGINAS ----------------------*/
import { InicioComponent } from './Paginas/inicio/inicio.component';
import { NosotrosComponent } from './Paginas/nosotros/nosotros.component';
import { ServiciosComponent } from './Paginas/servicios/servicios.component';
import { ProyectosComponent } from './Paginas/proyectos/proyectos.component';
import { ContactoComponent } from './Paginas/contacto/contacto.component';
/*--------------------- PAGINAS END ------------------*/

/*--------------------- PAGES ----------------------*/
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ServicesComponent } from './Pages/services/services.component';
import { ProyectsComponent } from './Pages/proyects/proyects.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { ArticlesComponent } from './Pages/articles/articles.component';
import { ContactComponent } from './Pages/contact/contact.component';
/*--------------------- PAGES END ------------------*/

/*--------------------- COMPONENTES ----------------------*/
import { HeaderComponent } from './Components/header/header.component';
import { SliderComponent } from './Components/slider/slider.component';
import { AboutComponent } from './Components/about/about.component';
import { ServiceComponent } from './Components/service/service.component';
import { FloatingMenuComponent } from './Widgets/floating-menu/floating-menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ClientComponent } from './Components/client/client.component';
import { VisionComponent } from './Components/vision/vision.component';
import { ProjectComponent } from './Components/project/project.component';
import { ProjectTwoComponent } from './Components/project-two/project-two.component';
import { ServiceTwoComponent } from './Components/service-two/service-two.component';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { ContactSectionComponent } from './Components/contact-section/contact-section.component';
import { FaqSectionComponent } from './Components/faq-section/faq-section.component';
import { BlogPostComponent } from './Components/blog-post/blog-post.component';
import { VentajasComponent } from './Components/ventajas/ventajas.component';
import { PageHeaderDefaultComponent } from './Components/page-header-default/page-header-default.component';
import { NewstellerComponent } from './Components/newsteller/newsteller.component';
import { ContactSectionTwoComponent } from './Components/contact-section-two/contact-section-two.component';
/*--------------------- COMPONENTES END ------------------*/

@NgModule({
  declarations: [
    AppComponent,
    ConfigColorComponent,
    HeaderComponent,
    SliderComponent,
    AboutComponent,
    ServiceComponent,
    FloatingMenuComponent,
    FooterComponent,
    ClientComponent,
    VisionComponent,
    ProjectComponent,
    TestimonialComponent,
    ContactSectionComponent,
    FaqSectionComponent,
    BlogPostComponent,
    VentajasComponent,
    HomeComponent,
    ContactComponent,
    BlogComponent,
    ProyectsComponent,
    PageHeaderDefaultComponent,
    NewstellerComponent,
    ArticlesComponent,
    formatDateString,
    ServicesComponent,
    AboutUsComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    ProyectosComponent,
    ServiceTwoComponent,
    ProjectTwoComponent,
    ContactoComponent,
    ContactSectionTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

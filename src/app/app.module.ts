import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigColorComponent } from './Widgets/config-color/config-color.component';
import { HeaderComponent } from './Components/header/header.component';
import { SliderComponent } from './Components/slider/slider.component';
import { AboutComponent } from './Components/about/about.component';
import { ServiceComponent } from './Components/service/service.component';
import { FloatingMenuComponent } from './Widgets/floating-menu/floating-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigColorComponent,
    HeaderComponent,
    SliderComponent,
    AboutComponent,
    ServiceComponent,
    FloatingMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

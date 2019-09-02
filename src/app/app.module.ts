import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { RoutingModule } from './app.routes';


//servicios
import { HeroesService } from './service/heroes.service';


//modulos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BusquedaComponent,
    BuscadorComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

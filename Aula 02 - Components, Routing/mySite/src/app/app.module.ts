import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { MainPageComponent } from './features/main-page/main-page.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { MercadoPageComponent } from './features/mercado-page/mercado-page.component';
import { ComidaPageComponent } from './features/comida-page/comida-page.component';
import { CardComidaComponent } from './features/comida-page/card-comida/card-comida.component';
import { CardMercadoComponent } from './features/mercado-page/card-mercado/card-mercado.component';
import { ModalCardComponent } from './components/modal-card/modal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    LoginPageComponent,
    MainPageComponent,
    NotFoundComponent,
    MercadoPageComponent,
    ComidaPageComponent,
    CardComidaComponent,
    CardMercadoComponent,
    ModalCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

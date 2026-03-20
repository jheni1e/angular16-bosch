import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainPageComponent } from './features/main-page/main-page.component';
import { ValidateCpfComponent } from './components/validate-cpf/validate-cpf.component';
import { CreateAccountComponent } from './features/main-page/create-account/create-account.component';
import { CardComponent } from './components/card/card.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    ValidateCpfComponent,
    CreateAccountComponent,
    CardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

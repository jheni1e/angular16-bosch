import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './features/main-page/main-page.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { CreateAccountComponent } from './features/main-page/create-account/create-account.component';

const routes: Routes = [
  { path: "", component: MainPageComponent, children: [ { path: "register", component: CreateAccountComponent }] },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

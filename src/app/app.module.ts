import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//import { ClientesComponent } from './pages/clientes/clientes.component';
//import { ClienteComponent } from './pages/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    //ClientesComponent,
    //ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

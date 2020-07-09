import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { ClienteRoutingModule } from './cliente-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ClienteComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule
  ]
})
export class ClienteModule { }

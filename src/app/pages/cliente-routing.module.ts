import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ClientesComponent } from './clientes/clientes.component';
import { ClienteComponent } from './cliente/cliente.component';

const routesChild: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'cliente/:id', component: ClienteComponent },
  //{ path: '**', pathMatch: 'full', redirectTo: 'clientes' }
];



@NgModule({
  imports: [
    RouterModule.forChild( routesChild )
  ],
  exports: [
    RouterModule
  ]
})
export class ClienteRoutingModule { }

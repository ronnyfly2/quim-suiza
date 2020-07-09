import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/stores/app.reducers';

import { ClientsService } from '../../services/clients.service';
import { loadClients } from '../../stores/actions/clientes.actions';
import { ClientModel } from '../../models/client.model';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clients: ClientModel[] = [];
  loading: boolean = false;
  error: any;
  swalCont: object;
  constructor(private store: Store<AppState>,private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.store.select('clients').subscribe( ({ clients, loading, error }) => {
      this.clients = clients;
      this.loading = loading;
      this.error = error;
    });


    this.store.dispatch( loadClients() );
  }
  removeClient( client: ClientModel, i: number ) {
    this.swalCont = {
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${ client.name }`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }
    Swal.fire(this.swalCont).then( resp => {
      if ( resp.value ) {
        this.clients.splice(i, 1);
        this.clientsService.removeClient( client.id ).subscribe();
      }
    });
  }

}

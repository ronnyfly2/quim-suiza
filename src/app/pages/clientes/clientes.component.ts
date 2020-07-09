import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { ClientModel } from '../../models/client.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clients: ClientModel[] = [];
  cargando = false;
  swalCont: object;
  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.clientsService.getClients()
    .subscribe( resp => {
      this.clients = resp;
      this.cargando = false;
    });
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

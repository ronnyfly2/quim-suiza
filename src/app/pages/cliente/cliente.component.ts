import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { ClientModel } from '../../models/client.model';
import { ClientsService } from '../../services/clients.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  client: ClientModel = new ClientModel();
  swalCotn: object;
  swalCnt: object;
  textPopUp: string;
  constructor(
    private clientsService: ClientsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if ( id !== 'nuevo' ) {
      this.clientsService.getClient( id )
        .subscribe( (resp: ClientModel) => {
          this.client = resp;
          this.client.id = id;
        });
    }
  }
  save( form: NgForm ) {
    if ( form.invalid ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Formulario no válido',
      })
      return;
    }
    this.swalCotn = {
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    }
    Swal.fire(this.swalCotn);
    Swal.showLoading();
    let rest: Observable<any>;
    if ( this.client.id ) {
      rest = this.clientsService.updateClient( this.client );
      this.textPopUp = 'Se actualizó correctamente';
    } else {
      rest = this.clientsService.createClient( this.client );
      this.textPopUp = 'Se guardó correctamente';
    }

    rest.subscribe( resp => {
      this.swalCnt={
        title: this.client.name,
        text: this.textPopUp,
        icon: 'success'
      }
      Swal.fire(this.swalCnt);

    });
  }

}

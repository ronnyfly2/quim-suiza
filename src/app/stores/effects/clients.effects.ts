import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as clientsActions from '../actions/clientes.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ClientsService } from '../../services/clients.service';
import { of } from 'rxjs';



@Injectable()
export class ClientsEffects {

    constructor(
        private actions$: Actions,
        private ClientsService: ClientsService
    ){}

    loadClients$ = createEffect(
        () => this.actions$.pipe(
            ofType( clientsActions.loadClients ),
            mergeMap(
                () => this.ClientsService.getClients()
                    .pipe(
                        map( clients => clientsActions.loadClientsSuccess({ clients }) ),
                        catchError( err => of(clientsActions.loadClientsError({ payload: err })) )
                    )
            )
        )
    );

}

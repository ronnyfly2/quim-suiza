import { createAction, props } from '@ngrx/store';
import { ClientModel } from '../../models/client.model';

export const loadClients = createAction('[Clientes] cargar clientes')


export const loadClientsSuccess = createAction(
  '[Clientes] cargar clientes con éxito',
  props<{clients:ClientModel[]}>()
)

export const loadClientsError = createAction(
  '[Clientes] cargar clientes con error',
  props<{payload:any}>()
)

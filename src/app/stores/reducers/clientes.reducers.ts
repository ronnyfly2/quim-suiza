import { createReducer, on } from '@ngrx/store';
import { loadClients, loadClientsSuccess, loadClientsError } from '../actions';
import { ClientModel } from '../../models/client.model';

export interface ClientsState {
  clients:ClientModel[],
  loaded:boolean,
  loading:boolean,
  error:any
};

export const clientsInitialState: ClientsState = {
  clients:[],
  loaded:false,
  loading:false,
  error:null
};

const _clientsReducer = createReducer(
  clientsInitialState,
  on(loadClients, state => ({ ...state, loading: true })),
  on(loadClientsSuccess, (state, { clients }) => ({
    ...state,
    loading: false,
    loaded:true,
    clients: [ ...clients ]
  })),
  on(loadClientsError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded:false,
    error: payload
  })),
);
export function clientsReducer(state, action) {
  return _clientsReducer(state, action);
}

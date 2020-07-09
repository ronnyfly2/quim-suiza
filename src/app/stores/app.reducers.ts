import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers'

export interface AppState {
  clients: reducers.ClientsState
}

export const appReducers: ActionReducerMap<AppState> = {
  clients: reducers.clientsReducer
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientModel } from '../models/client.model';
import { map, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private url = 'https://suiza-5227f.firebaseio.com';

  constructor(private http: HttpClient) { }

  createClient( client: ClientModel ) {
    return this.http.post(`${ this.url }/clients.json`, client)
      .pipe(
        map( (resp: any) => {
          client.id = resp.name;
          return client;
        })
      );
  }
  updateClient( client: ClientModel ) {
    const clientTemp = {
      ...client
    };
    delete clientTemp.id;
    return this.http.put(`${ this.url }/clients/${ client.id }.json`, clientTemp);


  }
  getClient( id: string ) {
    return this.http.get(`${ this.url }/clients/${ id }.json`);
  }

  getClients() {
    return this.http.get(`${ this.url }/clients.json`)
      .pipe(
        map( this.createArray ),
        delay(0)
      );
  }
  removeClient( id: string ) {
    return this.http.delete(`${ this.url }/clients/${ id }.json`);
  }
  private createArray( clientsObj: object ) {

    const clients: ClientModel[] = [];
    if(!clientsObj)return []
    Object.keys( clientsObj ).forEach( key => {
      const client: ClientModel = clientsObj[key];
      client.id = key;
      clients.push( client );
    });


    return clients;

  }
}

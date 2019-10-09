import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CidadeEntity } from 'src/app/_services/cidades.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public find(): Observable<ClienteEntity[]> {
    return this.http.get<ClienteEntity[]>(environment.urlsaaS + '/clientes');
  }
}

export class ClienteEntity {
  id: number;
  codigo: string;
  nome: string;
  email: string;
  cidade: CidadeEntity
}

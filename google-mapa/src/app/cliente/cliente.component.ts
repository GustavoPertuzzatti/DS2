import { Component, OnInit } from '@angular/core';
import { ClienteService, ClienteEntity } from '../_services/cliente.service';
import { CidadesService, CidadeEntity } from '../_services/cidades.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public displayedColumns: string[] = ['codigo', 'nome', 'email', 'cidade', 'options'];

  public clientes: ClienteEntity[] = [];
  public cidades:  CidadeEntity[] = [];


  constructor(private service: ClienteService, private CidadesService: CidadesService) { }

  ngOnInit() {

    this.service.find().subscribe(result => {

      this.clientes = result;

      this.CidadesService.find().subscribe(result => {

        this.cidades = result;
      
      }, error => {
        console.error('Pau', error);
      });
    
    }, error => {
      console.error('Pau', error);
    });

  }


}

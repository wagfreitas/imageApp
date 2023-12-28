import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ExamesService } from '../services/exames.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService {

  constructor( private examesService: ExamesService) {}

  public resolve(route: ActivatedRouteSnapshot) {

    // carrega os valores que foram carregados pelo componente list-exames na pagina mascara.
    const dados = this.examesService.getData();
   return dados;
  }
}

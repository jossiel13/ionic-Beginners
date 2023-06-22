import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { componente } from '../interfaces/componente';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getUsuarios(){
//Aqui va la peticion get de los redireccionamientos

return this.http.get<componente[]>('../../assets/data/menu-opts.json')
  }

  getAlbums(){
    //Aqui va la peticion get de los redireccionamientos

    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums')
  }

  getHeroes(){
    //Aqui va la peticion get de los redireccionamientos

    return this.http.get<componente[]>('../../assets/data/hero.json')
              .pipe(
                delay(1500)
              );
      }


}

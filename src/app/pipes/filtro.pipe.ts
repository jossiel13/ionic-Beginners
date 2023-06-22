import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], texto: string = '', columna:string ='title'): any[] {

if(texto === ''){return value;} //cadena vacia retorna all data

if(!value){return value}//Distinto de cadena retorna all data

//Sensitive Case "JavaScript" conversion
texto=texto.toLocaleLowerCase();

    return value.filter(item=>item[columna].toLowerCase().includes(texto));

  }

  //filto parametrizado
  //transform(value: any[], texto: string = '',columna:string ='title'): any[] {
      // =>Ocupa el valor de columna
              //&& retornaria
      //return item[columna].filtrer  etc....


}

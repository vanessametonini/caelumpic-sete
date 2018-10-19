import { Pipe, PipeTransform } from '@angular/core';
import { Foto } from '../foto/foto';

@Pipe({
  name: 'filtroPorTitulo'
})
export class FiltroPorTituloPipe implements PipeTransform {

  transform(listaFoto: Foto[], termoFiltro: string): Foto[] {
    return listaFoto.filter(
      foto => {
        if(foto.titulo.toLowerCase().includes(termoFiltro.toLowerCase())){
          return foto
        }
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Foto } from '../foto/foto';
import { FotoService } from '../servicos/foto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  listaFotos: Foto[] = []

  constructor(private servico: FotoService) { }

  ngOnInit() {
      this.servico
          .listar()
          .subscribe(fotosApi => this.listaFotos = fotosApi);
  }

  deletar(fotoApagada: Foto){
    this.servico
      .deletar(fotoApagada)
      .subscribe(
        () => {
          console.log(`${fotoApagada.titulo} apagada com sucesso`)
          this.listaFotos = this.listaFotos.filter( fotoLista => fotoLista != fotoApagada)
        }
      )
  }

}

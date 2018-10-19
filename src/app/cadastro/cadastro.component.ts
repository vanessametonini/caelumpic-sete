import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new Foto();

  constructor(private servico: FotoService,
              private rotaAtivada: ActivatedRoute,
              private roteador: Router) {}

  ngOnInit() {
    this.rotaAtivada.params.subscribe(
      parametros => {
        let id = parametros.fotoId
        
        if(id){
          this.servico
              .buscar(id)
              .subscribe(
                fotoApi => this.foto = fotoApi
              )
        }
      }
    )
  }

  salvar(){
    
    if(this.foto._id){
      this.servico
          .atualizar(this.foto)
          .subscribe(
              () => {
                console.log(`${this.foto.titulo} atualizada com sucesso`);
                this.roteador.navigate([''])
              }
          )
    }
    else {
      this.servico
          .cadastrar(this.foto)
          .subscribe(
            () => console.log(`${this.foto.titulo} cadastrada com sucesso`)
          )
    }
  }

}

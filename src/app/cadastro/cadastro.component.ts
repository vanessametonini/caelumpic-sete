import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Mensagem } from '../mensagem/mensagem';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new Foto();
  formCadastro = new FormGroup({});

  formControls = {
    titulo: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(5)
    ])),
    url: new FormControl('', Validators.required),
    descricao: new FormControl('')
  }

  mensagem = new Mensagem();

  constructor(private servico: FotoService,
              private rotaAtivada: ActivatedRoute,
              private roteador: Router) {}

  ngOnInit() {

    this.formCadastro = new FormGroup(this.formControls);

    this.rotaAtivada.params.subscribe(
      parametros => {
        let id = parametros.fotoId
        
        if(id){
          this.servico
              .buscar(id)
              .subscribe(
                fotoApi => {
                  this.foto = fotoApi;
                  this.formCadastro.patchValue(fotoApi);
                }
              )
        }
      }
    )
  }

  updateControls(){
    this.foto = { ...this.foto, ...this.formCadastro.value }
  }

  salvar(){

    if(this.foto._id){
      this.servico
          .atualizar(this.foto)
          .subscribe(
              () => {
                this.mensagem = {
                  tipo: 'success',
                  texto: `${this.foto.titulo} atualizada com sucesso`
                }
                
                setTimeout(() => this.roteador.navigate(['']), 3000)
              }
          )
    }
    else {
      this.servico
          .cadastrar(this.foto)
          .subscribe(
            () => {
              this.mensagem = {
                tipo: 'success',
                texto: `${this.foto.titulo} cadastrada com sucesso`
              }
              this.formCadastro.reset();
              
              setTimeout(() => this.mensagem = new Mensagem(), 3000)
            }
          )
    }
  }

}

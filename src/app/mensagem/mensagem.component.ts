import { Component, Input } from '@angular/core';
import { Mensagem } from './mensagem';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styles: []
})
export class MensagemComponent {

  @Input('dados') mensagem = new Mensagem();

}

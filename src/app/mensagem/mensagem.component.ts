import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  template: `<p class="alert alert-{{tipo}}"><ng-content></ng-content></p>`,
  styles: []
})
export class MensagemComponent {

  @Input() tipo = 'info';

  constructor(){}

}

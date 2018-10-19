import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foto',
  template: `<img [src]="url" [alt]="titulo" class="card-img-top">`,
  styles: []
})
export class FotoComponent implements OnInit {

  @Input() url = '';
  @Input() titulo = '';

  constructor() {}

  ngOnInit() {}

}

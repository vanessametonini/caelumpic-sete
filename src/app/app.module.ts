import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotoComponent } from './foto/foto.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CardComponent } from './card/card.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FiltroPorTituloPipe } from './listagem/filtro-por-titulo.pipe';
import { MensagemComponent } from './mensagem/mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    ListagemComponent,
    CardComponent,
    CadastroComponent,
    FiltroPorTituloPipe,
    MensagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

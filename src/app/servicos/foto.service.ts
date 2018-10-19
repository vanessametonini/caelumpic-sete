import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foto } from '../foto/foto';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  private url = 'http://localhost:3000/v1/fotos/'

  constructor(private conexaoApi: HttpClient){}

  listar(): Observable<Foto[]> {
    return this.conexaoApi.get<Foto[]>(this.url)
  }

  cadastrar(foto: Foto): Observable<Object> {
    return this.conexaoApi.post(this.url, foto)
  }

  deletar(foto): Observable<Object> {
    return this.conexaoApi.delete(this.url+foto._id)
  }

  buscar(fotoId: string): Observable<Foto> {
    return this.conexaoApi.get<Foto>(this.url+fotoId)
  }

  atualizar(foto: Foto): Observable<Object> {
    return this.conexaoApi.put(this.url+foto._id, foto)
  }

}

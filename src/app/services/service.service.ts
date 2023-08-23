import { Injectable } from '@angular/core';

import { Usuario } from '../Interfaces/usuario';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscribable, Subscriber, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {

  private readonly apiUrl = 'http://localhost:8080/';
  private readonly gitbub = 'https://api.github.com/users/Emm4nuell/repos';
   usuario : Usuario ={
    id: 0,
    nome: '',
    celular: '',
    email: '',
    mensagem: ''
   };

  constructor(private http: HttpClient) { }


  git(){
    return this.http.get<any>(this.gitbub);
  }

  /* Listar todos os acessos! */
  getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  /* Faz uma pesquisar por id */
  getItem(id: any): Observable<Usuario>{
    return this.http.get<Usuario>(this.apiUrl.concat(id));
  }

  /* Adicionar informaçoes no banco de dados */
  adicionarUsuario(dados: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.apiUrl, dados);
  }

  /* Atualizar dados */
  atualizar(id: any, usuario: Usuario): Observable<any>{
    return this.http.put(this.apiUrl.concat(id), usuario);
  }

  /* Deletar dados do banco de dados */
  delete(id:any){
    return this.http.delete(this.apiUrl.concat(id))
  }
}

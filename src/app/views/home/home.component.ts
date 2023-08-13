import { MessagesComponent } from './../../components/messages/messages.component';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/Interfaces/usuario';
import { ListService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private al = new MessagesComponent;
  usuario : Usuario ={
    id: 0,
    nome : '', 
    email : '', 
    celular : '', 
    mensagem : ''
  };

  lista !: Usuario[];

  /* ocultar uma div */
  mostrar : boolean = false;

  /* Mostrar na página Inicial */
  nome : string = "SOU EDUARDO EMMANUEL";
  virgula : string = ',';

  
 cadastrar(){
  console.log(this.usuario);
  this.listService.adicionarUsuario(this.usuario).subscribe(dados => {
    console.log('Cadastrar')
    this.usuario ={
      id: 0,
      nome : '', 
      email : '', 
      celular : '', 
      mensagem : ''
    };

  }, err =>{
    console.log('Erro ao cadastrar o usuario! ', err);
    this.usuario = this.usuario;
    this.al.voltar
  });
 }
  
  constructor(private listService: ListService){}
  ngOnInit(): void {}
}

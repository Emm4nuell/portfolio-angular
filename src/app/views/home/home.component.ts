import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { style, state, trigger, animate, transition } from '@angular/animations';

import { Usuario } from 'src/app/Interfaces/usuario';
import { ListService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  divmensagem : boolean = false;

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

 
  /* INICIO FUNÇÃO CADASTRAR */
 cadastrar(){
  this.listService.adicionarUsuario(this.usuario).subscribe({
    next: (responsta) =>{
      this.usuario ={id: 0, nome : '', email : '', celular : '', mensagem : ''};
      this.fechar();
    }, error: (err: any) =>{
      console.log('Erro ao cadastrar o usuario! ', err.status);
      this.usuario = this.usuario;
    }});
}
/* FIM FUNÇÃO CADASTRAR */
 fechar(){
  this.divmensagem = !this.divmensagem;
 }

 public slider = [
  { src: "https://miro.medium.com/v2/resize:fit:1358/0*wuNf24urnMp7ypDp.png"},
  { src: "https://miro.medium.com/v2/resize:fit:725/0*RZJNVUPhKktHtpI7.png"},
  { src: "https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png"},
  { src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1633101239445/1LPg4fxdV.png"},
  { src: "https://www.javaindia.in/blog/wp-content/uploads/2020/09/java-web-development.png"},
  { src: "https://jmvstream.com/wp-content/uploads/2023/07/HTML-CSS.jpeg"}
 ]
  
  constructor(private listService: ListService){}
  ngOnInit(): void {}
}

















/*   
 cadastrar(){
  console.log(this.usuario);
  this.listService.adicionarUsuario(this.usuario).subscribe(dados => {
    this.usuario ={id: 0, nome : '', email : '', celular : '', mensagem : ''};
    this.fechar();

  }, err =>{
    console.log('Erro ao cadastrar o usuario! ', err);
    this.usuario = this.usuario;
  });
 } */

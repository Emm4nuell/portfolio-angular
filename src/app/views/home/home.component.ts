import { Observable } from 'rxjs';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { style, state, trigger, animate, transition } from '@angular/animations';

import { Usuario } from 'src/app/Interfaces/usuario';
import { Service } from 'src/app/services/service.service';
import { Router } from '@angular/router';

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
 cadastrar(): void{
  this.service.adicionarUsuario(this.usuario).subscribe({
    next: (responsta) =>{
      console.warn(responsta)
      this.fechar();
      this.router.navigate(['']);
      this.usuario ={ id: 0, nome : '', email : '', celular : '', mensagem : '' };
    }, error: (err: any) =>{
      console.log('Erro ao cadastrar o usuario! ', err.status);
      this.usuario = this.usuario;
    }});
}
/* FIM FUNÇÃO CADASTRAR */
 fechar(){
  this.divmensagem = !this.divmensagem;
 }

  constructor(private service: Service, private router: Router, private helref: ElementRef){}
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

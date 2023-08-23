import { Component, OnInit } from '@angular/core';

import { Service } from 'src/app/services/service.service';

import { Usuario } from 'src/app/Interfaces/usuario';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit{

  /* Dados que esta na interface para seguir um padrão */
  acessos : Array<Usuario> = new Array();

  constructor(private listService: Service){}

  ngOnInit(): void {
    this.listService.getAll().subscribe(dados => {
      this.acessos = dados;
    }, err => {
      console.log('Erro ao listar os dados', err);
    })
  }

}

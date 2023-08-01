import { Component } from '@angular/core';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  usuarios = [
    {nome: "Eduardo", sexo: "Masculino"},
    {nome: "Maria", sexo: "Feminino"}
  ]

  constructor(private listService: ListService){}


}

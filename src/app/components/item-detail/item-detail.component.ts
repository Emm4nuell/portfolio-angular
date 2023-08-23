import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Usuario } from 'src/app/Interfaces/usuario';
import { Service } from 'src/app/services/service.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {

  acesso?: Usuario;

  constructor(private listService : Service, private route : ActivatedRoute){
    this.getAcesso();
  }

  getAcesso(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe((usuario) => (this.acesso = usuario));
  }

}

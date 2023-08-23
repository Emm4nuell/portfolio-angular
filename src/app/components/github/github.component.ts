import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/service.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  projetos: Array<any> = new Array();

  constructor(private service: Service){}

  listarprojetos(){
    this.service.git().subscribe((response) => {
      this.projetos = response;
      console.warn(response[0]);
    })
  }

  ngOnInit(): void {
    this.listarprojetos();
  }
}

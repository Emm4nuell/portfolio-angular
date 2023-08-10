import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nome : String = "";

  constructor(){}

  ngOnInit(): void {}

  obterValor(nome : String){
    this.nome = nome;
  }
}

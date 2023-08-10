import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  fala(): void{
    let x = document.querySelector(".falacomigo");
    console.log(x?.getBoundingClientRect);
  }

}

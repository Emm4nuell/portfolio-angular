import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
 @Input() mostrar: boolean = false;

 @Input() voltar(){
    this.mostrar = !this.mostrar;
  }
}

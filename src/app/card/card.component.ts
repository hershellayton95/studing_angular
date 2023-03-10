import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  title: string = "";

  onClick(): void {
    this.title = "maiale"
  }


  onInput(event: Event): void {
    this.title = (<HTMLInputElement>event.target).value;
  }
}

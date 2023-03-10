import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  title: string = "";

  onClick() {
    console.log("tasto premuto");
  }


  onInput(event: Event): void {
    this.title = (<HTMLInputElement>event.target).value;
  }
}

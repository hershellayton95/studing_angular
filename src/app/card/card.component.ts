import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  dog = {
    name: "Shiba Inu",
    breed: "Dog Breed",
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`
  }

  style = "color: red"

  constructor() {
  }

  onClick() {
    console.log("tasto premuto");

  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.style === "color: red") {
        this.style = "color: blue"
      } else {
        this.style = "color: red"
      }
    }, 2000)
  }
}

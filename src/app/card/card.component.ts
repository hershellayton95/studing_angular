import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("0 costruttore");
  }




  ngOnChanges(): void {
    console.log("on changes --- questa non dovrebbe funzionare");
  }
  ngOnInit(): void {
    console.log("1 Init");
  }
  ngDoCheck(): void {
    console.log("2 e 6 e 8 do check");
  }
  ngAfterContentInit(): void {
    console.log("3 after content init");
  }
  ngAfterContentChecked(): void {
    console.log("4 e 7 e 9 content checked");
  }
  ngAfterViewInit(): void {
    console.log("5 after view init");
  }
  ngAfterViewChecked(): void {
    console.log("5 after view checked");
  }
  ngOnDestroy(): void {
    console.log("on destroy");
  }
}

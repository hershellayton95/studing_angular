import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  sottoscrizione!: any;

  ngOnInit(): void {
    this.sottoscrizione = interval(1000).subscribe((observer) => {
      console.log(observer);
    });

    // creiamo noi
    // new Observable((observer) => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     count++;
    //   }, 1000);
    // }).subscribe((number) => {
    //   console.log(number);
    // });
  }
  ngOnDestroy(): void {
    this.sottoscrizione.unsubscribe();
  }
}

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('inputSaluti') inputSaluti!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    console.log('on init');
    console.log(this.inputSaluti);
  }
  ngAfterViewInit(): void {
    console.log('after view init');
    console.log(this.inputSaluti.nativeElement.value);
  }

  onClick(): void {
    console.log('click');
    console.log(this.inputSaluti.nativeElement.value);
  }
}

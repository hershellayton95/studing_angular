import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ProvaService } from './service/prova.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // private servizioProva;
  // constructor(servizioProva: ProvaService) {
  //   this.servizioProva = servizioProva;
  // }

  constructor(private servizioProva: ProvaService) {}

  ngOnInit(): void {
    console.log('da app', this.servizioProva.persone);
  }
}

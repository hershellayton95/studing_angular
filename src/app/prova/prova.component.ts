import { Component, OnInit } from '@angular/core';
import { ProvaService } from '../service/prova.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnInit {
  // private servizioProva;
  // constructor(servizioProva: ProvaService) {
  //   this.servizioProva = servizioProva;
  // }

  constructor(private servizioProva: ProvaService) {}

  ngOnInit(): void {
    console.log('da prova', this.servizioProva.persone);
  }
}

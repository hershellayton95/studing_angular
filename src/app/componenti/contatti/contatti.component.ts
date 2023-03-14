import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvaService } from 'src/app/service/prova.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css'],
})
export class ContattiComponent implements OnInit {
  persone: any;
  servizioProva: ProvaService;

  constructor(servizioProva: ProvaService, route: ActivatedRoute) {
    this.servizioProva = servizioProva;
  }

  ngOnInit(): void {
    this.persone = this.servizioProva.getPersone();
  }
}

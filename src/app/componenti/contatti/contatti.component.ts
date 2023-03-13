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
  persona: any;
  isProfile!: boolean;

  servizioProva: ProvaService;
  route: ActivatedRoute;

  constructor(servizioProva: ProvaService, route: ActivatedRoute) {
    this.servizioProva = servizioProva;
    this.route = route;
  }

  ngOnInit(): void {
    // this.persone = this.servizioProva.getPersone();
    // this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true;

    if (this.route.snapshot.paramMap.get('id')) {
      this.isProfile = true;
      this.persona = this.servizioProva.getPersona(
        parseInt(this.route.snapshot.paramMap.get('id')!)
      );
    } else {
      this.isProfile = false;
      this.persone = this.servizioProva.getPersone();
    }
    console.log(this.isProfile);
  }
}

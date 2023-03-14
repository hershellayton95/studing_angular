import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProvaService } from 'src/app/service/prova.service';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css'],
})
export class ContattoComponent implements OnInit {
  persona: any;
  id!: number;

  constructor(
    private servizioProva: ProvaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
      this.persona = this.servizioProva.getPersona(this.id);
    });
  }
}

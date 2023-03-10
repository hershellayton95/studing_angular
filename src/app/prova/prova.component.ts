import { Component, Input } from '@angular/core';


type Persons = { nome: string; cognome: string; isOnline: boolean; color: string; }[];
@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent {

  @Input() persons: Persons | undefined;
}

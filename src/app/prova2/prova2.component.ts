import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-prova2',
  templateUrl: './prova2.component.html',
  styleUrls: ['./prova2.component.css']
})
export class Prova2Component {
  @Output() mandaDatiEvento = new EventEmitter<Persons>()

  persons = [
    { nome: "Filippo", cognome: "Di Marco", isOnline: true, color: "green" },
    { nome: "Romano", cognome: "Chiavetta", isOnline: false, color: "blue" },
    { nome: "Alberto", cognome: "Passarello", isOnline: false, color: "yellow" },
  ];

  mandaDati() {
    this.mandaDatiEvento.emit(this.persons);
  }

}

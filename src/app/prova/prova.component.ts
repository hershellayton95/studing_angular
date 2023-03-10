import { Component } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent {
  personas = [
    { nome: "Filippo", cognome: "Di Marco", isOnline: true },
    { nome: "Romano", cognome: "Chiavetta", isOnline: false },
    { nome: "Alberto", cognome: "Passarello", isOnline: false },
  ]
}

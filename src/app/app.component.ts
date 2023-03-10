import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons = [
    { nome: "Filippo", cognome: "Di Marco", isOnline: true, color: "green" },
    { nome: "Romano", cognome: "Chiavetta", isOnline: false, color: "blue" },
    { nome: "Alberto", cognome: "Passarello", isOnline: false, color: "yellow" },
  ]
}

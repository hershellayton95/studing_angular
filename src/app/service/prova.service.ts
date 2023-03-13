import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProvaService {
  persone = [
    { nome: 'Filippo', cognome: 'Di Marco', isOnline: true },
    { nome: 'Alberto', cognome: 'Passarello', isOnline: false },
    { nome: 'Romano', cognome: 'Chiavetta', isOnline: false },
  ];
  constructor() {}

  getPersone() {
    return this.persone;
  }

  getPersona(index: number) {
    return this.persone[index];
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProvaService {
  persone = [
    {
      nome: 'Filippo',
      cognome: 'Di Marco',
      isOnline: true,
      colore: 'verde',
    },
    {
      nome: 'Alberto',
      cognome: 'Passarello',
      isOnline: false,
      colore: 'giallo',
    },
    {
      nome: 'Romano',
      cognome: 'Chiavetta',
      isOnline: false,
      colore: 'nero',
    },
  ];
  constructor() {}

  getPersone() {
    return this.persone;
  }

  getPersona(index: number) {
    return this.persone[index];
  }
}

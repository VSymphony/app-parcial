import { Component } from '@angular/core';

@Component({
  selector: 'app-respuesta4',
  standalone: true,
  imports: [],
  templateUrl: './respuesta4.component.html',
  styleUrl: './respuesta4.component.css'
})
export class Respuesta4Component {
  numerosPares: number[] = [];

  constructor() {
    this.generarNumerosPares();
  }

  generarNumerosPares(): void {
    this.numerosPares = [];
    for (let i = 20; i >= 10; i--) {
      if (i % 2 === 0) {
        this.numerosPares.push(i);
      }
    }
  }
}

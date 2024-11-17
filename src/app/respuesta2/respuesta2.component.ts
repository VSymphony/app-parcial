import { Component } from '@angular/core';

@Component({
  selector: 'app-respuesta2',
  standalone: true,
  imports: [],
  templateUrl: './respuesta2.component.html',
  styleUrl: './respuesta2.component.css'
})
export class Respuesta2Component {
  prestamo: number = 0;
  cuotas: number | null = null;
  montoPorCuota: number | null = null;

  actualizarPrestamo(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.prestamo = parseFloat(inputElement.value);
  }

  calcularPlanDePago(): void {
    let interes: number;

    if (this.prestamo > 5000) {
      this.cuotas = 3;
    } else if (this.prestamo < 1000) {
      this.cuotas = 1;
    } else if (this.prestamo >= 2000 && this.prestamo <= 3000) {
      this.cuotas = 2;
    } else {
      this.cuotas = 5;
    }

    // Determinar el porcentaje de interés
    interes = this.prestamo < 4000 ? 0.12 : 0.10;

    // Calcular el monto total con el interés aplicado
    const montoTotalConInteres = this.prestamo * (1 + interes);

    // Calcular el monto de cada cuota
    this.montoPorCuota = montoTotalConInteres / this.cuotas;
  }
}

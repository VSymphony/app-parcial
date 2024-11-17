import { Component } from '@angular/core';

@Component({
  selector: 'app-respuesta1',
  standalone: true,
  imports: [],
  templateUrl: './respuesta1.component.html',
  styleUrl: './respuesta1.component.css'
})
export class Respuesta1Component {
  cantidad: number = 0;
  precio: number = 0;
  precioFinal: number | null = null;

  actualizarCantidad(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.cantidad = Number(inputElement.value);
  }

  actualizarPrecio(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.precio = Number(inputElement.value);
  }

  calcularPrecioFinal(): void {
    const valorTotal = this.cantidad * this.precio;
    if (valorTotal > 200) {
      this.precioFinal = valorTotal * 0.8;
    } else {
      this.precioFinal = valorTotal;
    }
  }
}

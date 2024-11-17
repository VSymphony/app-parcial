import { Component } from '@angular/core';

@Component({
  selector: 'app-respuesta3',
  standalone: true,
  imports: [],
  templateUrl: './respuesta3.component.html',
  styleUrl: './respuesta3.component.css'
})
export class Respuesta3Component {
  anioNacimiento: number | null = null;
  mensaje: string = '';

  actualizarAnioNacimiento(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.anioNacimiento = parseInt(inputElement.value, 10);
  }

  verificarDni(): void {
    if (this.anioNacimiento) {
      const anioActual = new Date().getFullYear();
      const edad = anioActual - this.anioNacimiento;

      if (edad >= 18) {
        this.mensaje = `Tienes ${edad} años, por lo tanto, debes sacar tu DNI.`;
      } else {
        this.mensaje = `Tienes ${edad} años, aún no necesitas sacar tu DNI.`;
      }
    } else {
      this.mensaje = 'Por favor, ingresa un año de nacimiento válido.';
    }
  }
}

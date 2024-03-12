import { Component } from '@angular/core';

@Component({
  selector: 'app-mega-sena',
  templateUrl: './mega-sena.component.html',
  styleUrl: './mega-sena.component.css'
})
export class MegaSenaComponent {
  numerosSorteados!: string;
  aposta!: string;
  resultado: number | null = null;

  checkNumeros() {
    const sortedArray = this.numerosSorteados.split(',').map(num => parseInt(num.trim(), 10));
    const betArray = this.aposta.split(',').map(num => parseInt(num.trim(), 10));

    // Verifica se os números sorteados e da aposta estão dentro do intervalo válido (1-60)
    if (!this.isValidInput(sortedArray) || !this.isValidInput(betArray)) {
      alert('Inserção Errada! Os números terão que estar entre 1 e 60.');
      return;
    }

    let numerosCorretos = 0;
    for (const number of betArray) {
      if (sortedArray.includes(number)) {
        numerosCorretos++;
      }
    }

    this.resultado = numerosCorretos;
  }

  isValidInput(numeros: number[]): boolean {
    for (const num of numeros) {
      if (isNaN(num) || num < 1 || num > 60) {
        return false;
      }
    }
    return true;
  }
}


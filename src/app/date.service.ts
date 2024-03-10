import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  // Método para formatar uma data no formato 'yyyy-MM-dd'
  formatarData(data: Date): string {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Mês começa do zero, então é necessário adicionar 1
    const ano = data.getFullYear();
    return `${ano}-${mes}-${dia}`;
  }

  // Método para converter uma string no formato 'yyyy-MM-dd' em um objeto Date
  converterStringParaData(dataString: string): Date {
    const partes = dataString.split('-');
    const ano = +partes[0];
    const mes = +partes[1] - 1; // Mês começa do zero, então subtraímos 1
    const dia = +partes[2];
    return new Date(ano, mes, dia);
  }
}

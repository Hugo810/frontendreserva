import { Cliente } from './cliente';
import { Quarto } from './quarto';
//import { ItemReserva } from './itemReserva';

export class Reserva {
  id?: number;
  cliente: Cliente;
  clienteId!: number; 
  quarto: Quarto;
  quartoId!: number; // Adicionando a propriedade quartoId
  data_Inicio: Date;
  //data_Fim: Date;
  quantidadeDias: number;
  valorReserva: number;
  

  constructor(
    cliente: Cliente,
    clienteId: number, // Adicionando clienteId ao construtor
    quarto: Quarto,
    quartoId: number, // Adicionando quartoId ao construtor
    data_Inicio: Date,
    //data_Fim: Date,
    quantidadeDias: number,
    valorReserva: number,
   
  ) {
    this.cliente = cliente;
    this.clienteId = clienteId; // Atribuindo clienteId
    this.quarto = quarto;
    this.quartoId = quartoId; // Atribuindo quartoId
    this.data_Inicio = data_Inicio;
    //this.data_Fim = data_Fim;
    this.quantidadeDias = quantidadeDias;
    this.valorReserva = valorReserva;
  }
}

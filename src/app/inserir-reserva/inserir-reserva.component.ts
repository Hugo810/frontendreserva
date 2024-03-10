import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente';
import { Quarto } from '../model/quarto';
import { Reserva } from '../model/reserva';
import { ClienteService } from '../cliente.service';
import { QuartoService } from '../quarto.service';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-inserir-reserva',
  templateUrl: './inserir-reserva.component.html',
  styleUrls: ['./inserir-reserva.component.css']
})
export class InserirReservaComponent {
  clientes: Cliente[] = [];
  quartos: Quarto[] = [];
  novaReserva: Reserva = {} as Reserva; // Inicializando como um objeto vazio

  constructor(private clienteService: ClienteService, private quartoService: QuartoService, private reservaService: ReservaService, private router: Router) { }

  ngOnInit(): void {
    this.buscarClientes();
    this.buscarQuartos();
    this.inicializarDataInicio(); // Inicializa a data de início ao carregar o componente
  }

  buscarClientes() {
    this.clienteService.listarCliente().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  buscarQuartos() {
    this.quartoService.listarQuarto().subscribe(quartos => {
      this.quartos = quartos;
    });
  }

  inicializarDataInicio() {
    // Define a data de início como a data atual
    this.novaReserva.data_Inicio = new Date();
  }

  inserirReserva() {
    // Verificando se a nova reserva tem cliente e quarto selecionados
    if (this.novaReserva.cliente && this.novaReserva.quarto) {
      // Obtendo os IDs do cliente e do quarto
      const clienteId = this.novaReserva.cliente.id;
      const quartoId = this.novaReserva.quarto.id;

      // Inserindo a reserva utilizando o serviço de reserva
      this.reservaService.incluirReserva(this.novaReserva).subscribe(reserva => {
        console.log('Reserva inserida com sucesso:', reserva);
        // Limpar os campos do formulário
        this.novaReserva = {} as Reserva; // ou você pode atribuir valores vazios aos campos individualmente
      });
    } else {
      console.error('As datas de início, cliente e quarto da reserva não são válidas.');
      console.log(this.novaReserva);
    }
  }
}

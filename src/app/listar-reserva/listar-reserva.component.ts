import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from '../model/reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {
  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService, private router: Router) { }

  ngOnInit(): void {
    this.listarReservas();
  }

  listarReservas() {
    this.reservaService.listarReservas().subscribe(
      reservas => {
        this.reservas = reservas;
      },
      error => {
        console.error('Erro ao listar reservas:', error);
      }
    );
  }

  excluirReserva(id: number) {
    if (confirm("Deseja excluir a reserva?")) {
      this.reservaService.excluirReserva(id).subscribe(() => {
        console.log("Reserva excluída com sucesso.");
        this.listarReservas(); // Atualiza a lista de reservas após a exclusão
      }, error => {
        console.error("Erro ao excluir reserva:", error);
      });
    }
  }

  alterarReserva(id: number) {
    this.router.navigate(['alterar-reserva', id]);
  }

  consultarReserva(id: number) {
    this.router.navigate(['consultar-reserva', id]);
  }
}

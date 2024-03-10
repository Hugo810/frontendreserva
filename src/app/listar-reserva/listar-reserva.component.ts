import { Component, OnInit } from '@angular/core';
import { Reserva } from '../model/reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {
  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.listarReservas();
  }

  listarReservas(): void {
    this.reservaService.listarReservas().subscribe(
      reservas => {
        this.reservas = reservas;
      },
      error => {
        console.error('Erro ao carregar reservas:', error);
      }
    );
  }
}

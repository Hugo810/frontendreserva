import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from '../model/reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-consultar-reserva',
  templateUrl: './consultar-reserva.component.html',
  styleUrls: ['./consultar-reserva.component.css']
})
export class ConsultarReservaComponent implements OnInit {
  id!: number;
  reserva: Reserva | undefined; // Alteração aqui para permitir que reserva seja undefined

  constructor(
    private reservaService: ReservaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.consultarReserva();
  }

  consultarReserva() {
    this.reservaService.consultarReserva(this.id).subscribe(
      reserva => {
        this.reserva = reserva;
      },
      error => {
        console.error('Ocorreu um erro ao consultar a reserva:', error);
      }
    );
  }

  retornar() {
    this.router.navigate(['listar-reserva']);
  }
}

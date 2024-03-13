import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from '../model/reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-alterar-reserva',
  templateUrl: './alterar-reserva.component.html',
  styleUrls: ['./alterar-reserva.component.css']
})
export class AlterarReservaComponent implements OnInit {
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

  onSubmit() {
    if (this.reserva) {
      this.reservaService.alterarReserva(this.id, this.reserva).subscribe(data => {
        console.log(data);
        this.retornar();
      });
    } else {
      console.error('Reserva não encontrada.');
    }
  }
}

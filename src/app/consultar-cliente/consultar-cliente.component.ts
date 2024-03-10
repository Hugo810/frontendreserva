import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {
  id!: number;
  cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.consultarCliente(this.id);
  }

  retornar(): void {
    this.router.navigate(['listar-cliente']);
  }

  consultarCliente(id: number): void {
    this.clienteService.consultarCliente(id).subscribe(
      cliente => {
        this.cliente = cliente;
      },
      error => {
        console.error('Ocorreu um erro ao consultar o cliente:', error);
      }
    );
  }
}

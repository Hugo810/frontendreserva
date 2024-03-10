import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-alterar-cliente',
  templateUrl: './alterar-cliente.component.html',
  styleUrls: ['./alterar-cliente.component.css']
})
export class AlterarClienteComponent implements OnInit {

  id!: number;
  nome!: string;
  email!: string;
  tipo!: string;
  cliente!: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cliente = new Cliente();
    this.clienteService.consultarCliente(this.id).subscribe(data => {
      this.cliente = data;
    });
  }

  retornar() {
    this.router.navigate(['listar-cliente']);
  }

  onSubmit() {
    this.clienteService.alterarCliente(this.id, this.cliente).subscribe(data => {
      console.log(data);
      this.retornar();
    });
  }

  inserirCliente() {
    this.clienteService.incluirCliente(this.cliente).subscribe(data => {
      console.log(data);
      this.retornar();
    });
  }
}

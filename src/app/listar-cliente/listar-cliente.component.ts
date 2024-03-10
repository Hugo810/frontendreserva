import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente';
import { TipoCliente } from '../model/tipocliente';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes!: Cliente[];
  tiposCliente: TipoCliente[] = Object.values(TipoCliente);

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.listarCliente();
  }
//Adicionado recentemente
  retornar() {
    this.router.navigate(['inicio']);
  }

  private listarCliente() {
    this.clienteService.listarCliente().subscribe(
      data => {
        this.clientes = data;
      },
      error => {
        console.error('Ocorreu um erro ao listar os clientes:', error);
      }
    );
  }
  

  excluirCliente(id: number) {
    if (confirm("Deseja excluir o cliente?")) {
      this.clienteService.excluirCliente(id).subscribe(data => {
        console.log(data);
        this.listarCliente();
      })
    }
  }

  inserirCliente() {
    this.router.navigate(['inserir-cliente'])
  }

  alterarCliente(id: number) {
    this.router.navigate(['alterar-Cliente', id])
  }

  consultarCliente(id: number) {
    if (id >= 0) {
      this.router.navigate(['consultar-cliente', id]);
    } else {
      console.error('ID do cliente é inválido:', id);
    }
  }



tipoSelecionado: string = ''; // ou qualquer tipo que você está usando para representar o tipo selecionado

filtrarPorTipo() {
    if (this.tipoSelecionado) {
        const tipoCliente: TipoCliente = TipoCliente[this.tipoSelecionado as keyof typeof TipoCliente];
        if (tipoCliente) {
            this.clienteService.filtrarPorTipo(tipoCliente).subscribe(data => {
                this.clientes = data;
            });
        } else {
            this.listarCliente();
        }
    }
}

clientesFiltrados: Cliente[] = [];

consultarTipo() {
    if (this.tipoSelecionado) {
        const tipoCliente: TipoCliente = TipoCliente[this.tipoSelecionado as keyof typeof TipoCliente];
        if (tipoCliente) {
            this.clienteService.filtrarPorTipo(tipoCliente).subscribe(data => {
                this.clientesFiltrados = data;
            });
        } else {
            console.error('Tipo de cliente inválido:', this.tipoSelecionado);
        }
    } else {
        this.listarCliente();
    }
}


}



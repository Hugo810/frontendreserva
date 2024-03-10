import { Component, OnInit } from '@angular/core';
import { QuartoService } from '../quarto.service';
import { Router } from '@angular/router';

import { TipoQuarto } from '../model/tipoquarto';
import { Quarto } from '../model/quarto';
import { StatusQuarto } from '../model/statusquarto';

@Component({
  selector: 'app-listar-quarto',
  templateUrl: './listar-quarto.component.html',
  styleUrls: ['./listar-quarto.component.css']
})
export class ListarQuartoComponent implements OnInit {

  quartos!: Quarto[];
  tiposQuarto: TipoQuarto[] = Object.values(TipoQuarto);
  statusQuarto: StatusQuarto[]=Object.values(StatusQuarto);

  constructor(private quartoService: QuartoService, private router: Router) { }

  ngOnInit(): void {
    this.listarQuarto();
  }

  retornar() {
    this.router.navigate(['inicio']);
  }


  private listarQuarto() {
    this.quartoService.listarQuarto().subscribe(data => {
      this.quartos = data;
    });
  }

  excluirQuarto(id: number) {
    if (confirm("Deseja excluir o Quarto?")) {
      this.quartoService.excluirQuarto(id).subscribe(data => {
        console.log(data);
        this.listarQuarto();
      })
    }
  }

  inserirQuarto() {
    this.router.navigate(['inserir-quarto'])
  }

  alterarQuarto(id: number) {
    this.router.navigate(['alterar-quarto', id])
  }

  consultarQuarto(id: number) {
    if (id >= 0) {
      this.router.navigate(['consultar-quarto', id]);
    } else {
      console.error('ID do quarto é inválido:', id);
    }
  }



  tipoSelecionado: string = ''; // ou qualquer tipo que você está usando para representar o tipo selecionado
  quartosFiltrados: Quarto[] = [];
  

  consultarTipo() {
    if (this.tipoSelecionado) {
      const tipoQuarto: TipoQuarto = TipoQuarto[this.tipoSelecionado as keyof typeof TipoQuarto];
      if (tipoQuarto) {
        this.quartoService.filtrarPorTipo(tipoQuarto).subscribe(data => {
          this.quartosFiltrados = data;
        });
      } else {
        console.error('Tipo de quarto inválido:', this.tipoSelecionado);
      }
    } else {
      this.listarQuarto();
    }
  }


  statusSelecionado: string = ''; 
  statusFiltrados:Quarto[]=[];
  consultarPorStatus() {
    if (this.statusSelecionado) {
      const statusQuarto: StatusQuarto = StatusQuarto[this.statusSelecionado as keyof typeof StatusQuarto];
      if (statusQuarto) {
        this.quartoService.filtrarPorStatus(statusQuarto).subscribe(data => {
          this.quartosFiltrados = data;
        });
      } else {
        console.error('Tipo de status inválido:', this.statusSelecionado);
      }
    } else {
      this.listarQuarto();
    }
  }

}





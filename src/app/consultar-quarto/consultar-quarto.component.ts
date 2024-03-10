// Importa os módulos necessários do Angular.
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { QuartoService } from '../quarto.service';


import { Quarto } from '../model/quarto';

@Component({

  selector: 'app-consultar-quarto',
  templateUrl: './consultar-quarto.component.html',
  styleUrls: ['./consultar-quarto.component.css']
})

export class ConsultarQuartoComponent implements OnInit {


  id!: number;


  quarto: Quarto;


  constructor(
    private quartoService: QuartoService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.quarto = new Quarto();
  }


  ngOnInit(): void {

    this.id = +this.route.snapshot.params['id'];

    this.consultarQuarto(this.id);
  }


  retornar(): void {
    this.router.navigate(['listar-quarto']);
  }


  consultarQuarto(id: number): void {

    this.quartoService.consultarQuarto(id).subscribe(

      quarto => {

        this.quarto = quarto;
      },

      error => {
        console.error('Ocorreu um erro ao consultar o quarto:', error);
      }
    );
  }
}

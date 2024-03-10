import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quarto } from '../model/quarto';
import { QuartoService } from '../quarto.service';

@Component({
  selector: 'app-alterar-quarto',
  templateUrl: './alterar-quarto.component.html',
  styleUrls: ['./alterar-quarto.component.css']
})
export class AlterarQuartoComponent implements OnInit {

  id!: number;
  nome!: string;
  email!: string;
  tipo!: string;
  quarto!: Quarto;

  constructor(
    private quartoService: QuartoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.quarto = new Quarto();
    this.quartoService.consultarQuarto(this.id).subscribe(data => {
      this.quarto = data;
    });
  }

  retornar() {
    this.router.navigate(['listar-quarto']);
  }

  onSubmit() {
    this.quartoService.alterarQuarto(this.id, this.quarto).subscribe(data => {
      console.log(data);
      this.retornar();
    });
  }

  inserirQuarto() {
    this.quartoService.incluirQuarto(this.quarto).subscribe(data => {
      console.log(data);
      this.retornar();
    });
  }
}

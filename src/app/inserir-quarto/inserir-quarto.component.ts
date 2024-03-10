import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Quarto } from '../model/quarto'; 
import { QuartoService } from '../quarto.service'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-inserir-quarto',
  templateUrl: './inserir-quarto.component.html',
  styleUrls: ['./inserir-quarto.component.css']
})

export class InserirQuartoComponent {
  
  id!: 0
  tipo!: number;
  numero!: number;
  preco!: number;
  quarto: Quarto=new Quarto();

 
  constructor(private quartoService: QuartoService,
    private router: Router,
    private http: HttpClient) { }

  
  ngOnInit(): void {
    
  }

  
  retornar() {
    this.router.navigate(['listar-quarto']);
  }

  
  onSubmit() {
   
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.quartoService.id = 0;
  
   
    this.http.post('http://localhost:8080/c_quarto/quarto', this.quarto, { headers })
      .subscribe(data => {
        // Redireciona para a página de listar quartos após a inserção.
        this.retornar();
      });
  }
}

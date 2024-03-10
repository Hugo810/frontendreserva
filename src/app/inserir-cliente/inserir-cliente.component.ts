
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente'; 
import { ClienteService } from '../cliente.service'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-inserir-cliente',
  templateUrl: './inserir-cliente.component.html',
  styleUrls: ['./inserir-cliente.component.css']
})

export class InserirClienteComponent {
  
  id!: 0
  nome!: string;
  email!: string;
  tipo!: string;
  cliente: Cliente=new Cliente();

 
  constructor(private clienteService: ClienteService,
    private router: Router,
    private http: HttpClient) { }

  
  ngOnInit(): void {
    
  }

  
  retornar() {
    this.router.navigate(['listar-cliente']);
  }

  
  onSubmit() {
   
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.clienteService.id = 0;
  
   
    this.http.post('http://localhost:8080/c_cliente/cliente', this.cliente, { headers })
      .subscribe(data => {
        // Redireciona para a página de listar clientes após a inserção.
        this.retornar();
      });
  }
}

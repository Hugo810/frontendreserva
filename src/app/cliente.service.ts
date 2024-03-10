import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './model/cliente';
import { TipoCliente } from './model/tipocliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  private url = "http://localhost:8080/c_cliente/cliente";
  id!: number;

  constructor(private httpClient: HttpClient) { }

  listarCliente(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.url}`);
  }

  consultarCliente(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.url}/${id}`);
  }

  incluirCliente(cliente: Cliente): Observable<Object> {
    return this.httpClient.post(`${this.url}`, cliente);
  }

  alterarCliente(id: number, changes: Partial<Cliente>): Observable<Object> {
    return this.httpClient.patch(`${this.url}/${id}`, changes);
  }

  excluirCliente(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  // Método para filtrar clientes por tipo
  filtrarPorTipo(tipo: TipoCliente): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.url}/tipo/${tipo}`);
  }
  consultarClientePorNome(nome: string): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.url}/nome/${nome}`);
  }
  
}

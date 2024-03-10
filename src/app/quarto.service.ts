import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quarto } from './model/quarto';
import { TipoQuarto } from './model/tipoquarto';
import { StatusQuarto } from './model/statusquarto';

@Injectable({
  providedIn: 'root'
})
export class QuartoService {
  
  private url = "http://localhost:8080/c_quarto/quarto";
  id!: number;
  quartos:Quarto[]=[]

  constructor(private httpClient: HttpClient) { }

  listarQuarto(): Observable<Quarto[]> {
    return this.httpClient.get<Quarto[]>(`${this.url}`);
  }

  consultarQuarto(id: number): Observable<Quarto> {
    return this.httpClient.get<Quarto>(`${this.url}/${id}`);
  }

  incluirQuarto(quarto: Quarto): Observable<Object> {
    return this.httpClient.post(`${this.url}`, quarto);
  }

  alterarQuarto(id: number, changes: Partial<Quarto>): Observable<Object> {
    return this.httpClient.patch(`${this.url}/${id}`, changes);
  }

  excluirQuarto(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  // Método para filtrar Quartos por tipo
  filtrarPorTipo(tipo: TipoQuarto): Observable<Quarto[]> {
    return this.httpClient.get<Quarto[]>(`${this.url}/tipo/${tipo}`);
  }

  filtrarPorStatus(status: StatusQuarto): Observable<Quarto[]> {
    return this.httpClient.get<Quarto[]>(`${this.url}/status/${status}`);
  }

 

  
}

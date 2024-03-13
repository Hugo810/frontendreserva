import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from './model/reserva';
import { Cliente } from './model/cliente';
import { Quarto } from './model/quarto';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  
  private baseUrl = "http://localhost:8080/c_reservas/reserva";

  constructor(private httpClient: HttpClient) { }

  incluirReserva(reserva: Reserva): Observable<Reserva> {
    //const url = `${this.baseUrl}/reserva`;
    return this.httpClient.post<Reserva>(this.baseUrl, reserva);
  }

  consultarClientesPorNome(nome: string): Observable<Cliente[]> {
    const url = `${this.baseUrl}/cliente/nome/${nome}`;
    return this.httpClient.get<Cliente[]>(url);
  }

  consultarQuartos(): Observable<Quarto[]> {
    const url = `${this.baseUrl}/quarto`;
    return this.httpClient.get<Quarto[]>(url);
  }

  listarReservas(): Observable<Reserva[]> {
    const url = `${this.baseUrl}/listareserva`;
    return this.httpClient.get<Reserva[]>(url);
  }

  excluirReserva(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<void>(url);
  }

  consultarReserva(id: number): Observable<Reserva> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Reserva>(url);
  }

  alterarReserva(id: number, reserva: Reserva): Observable<Reserva> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.put<Reserva>(url, reserva);
  }
}
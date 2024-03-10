import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './model/cliente';
import { Quarto } from './model/quarto';
import { Reserva } from './model/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  
  private baseUrl = "http://localhost:8080/c_reservas/reserva";

  constructor(private httpClient: HttpClient) { }

  incluirReserva(reserva: Reserva): Observable<Reserva> {
    return this.httpClient.post<Reserva>(this.baseUrl, reserva);
  }

  consultarClientesPorNome(nome: string): Observable<Cliente[]> {
    const url = `${this.baseUrl}/cliente/nome/${nome}`;
    return this.httpClient.get<Cliente[]>(url);
  }

  // Método para consultar todos os quartos
  consultarQuartos(): Observable<Quarto[]> {
    const url = `${this.baseUrl}/quarto`;
    return this.httpClient.get<Quarto[]>(url);
  }

  // Método para listar todas as reservas
  listarReservas(): Observable<Reserva[]> {
    const url = `${this.baseUrl}/reserva`; // Ajuste conforme sua rota para listar reservas
    return this.httpClient.get<Reserva[]>(url);
  }
}

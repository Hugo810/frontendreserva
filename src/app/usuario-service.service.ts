import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private url = "http://localhost:8080/c_usuario"; // URL do endpoint do backend para usuários

  constructor(private httpClient: HttpClient) { }

  // Método para autenticar usuário
  autenticarUsuario(email: string, senha: string): Observable<any> {
    return this.httpClient.post(`${this.url}/login`, { email, senha });
  }

  // Método para verificar se o usuário está autenticado
  verificarAutenticacao(): Observable<any> {
    return this.httpClient.get(`${this.url}/check-auth`);
  }

  // Método para registrar um novo usuário
  registrarUsuario(usuario: any): Observable<any> {
    return this.httpClient.post(`${this.url}/register`, usuario);
  }

  // Método para fazer logout do usuário
  logoutUsuario(): Observable<any> {
    return this.httpClient.get(`${this.url}/logout`);
  }

}

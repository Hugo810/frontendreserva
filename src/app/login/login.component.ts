import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importar FormGroup e FormBuilder
import { UsuarioService } from '../usuario-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; // Definir a variável loginForm como tipo FormGroup
  loginInvalido: boolean = false;
  

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder // Injetar FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({ // Inicializar o loginForm com formBuilder
      email: ['', [Validators.required, Validators.email]], // Definir validadores para o campo de email
      senha: ['', Validators.required] // Definir validadores para o campo de senha
    });
  }

  // Obter acesso fácil aos controles do formulário
  get form() { return this.loginForm.controls; }

  login(): void {
    // Verificar se o formulário é válido
    if (this.loginForm.invalid) {
      return;
    }

    const { email, senha } = this.loginForm.value; // Obter valores do formulário

    // Autenticar usuário
    this.usuarioService.autenticarUsuario(email, senha).subscribe(
      () => {
        this.router.navigate(['/inicio']); // Redirecionar para a página principal após o login bem-sucedido
      },
      (error) => {
        console.error('Erro durante a autenticação:', error);
        this.loginInvalido = true;
      }
    );
  }
}

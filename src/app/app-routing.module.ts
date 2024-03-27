// Importa os módulos necessários do Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa os componentes que serão utilizados como rotas.
import { InicioComponent } from './inicio/inicio.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { AlterarClienteComponent } from './alterar-cliente/alterar-cliente.component';
import { InserirClienteComponent } from './inserir-cliente/inserir-cliente.component';
import { ListarQuartoComponent } from './listar-quarto/listar-quarto.component';
import { ConsultarQuartoComponent } from './consultar-quarto/consultar-quarto.component';
import { AlterarQuartoComponent } from './alterar-quarto/alterar-quarto.component';
import { InserirQuartoComponent } from './inserir-quarto/inserir-quarto.component';
import { InserirReservaComponent } from './inserir-reserva/inserir-reserva.component';
import { ListarReservaComponent } from './listar-reserva/listar-reserva.component';
import { ConsultarReservaComponent } from './consultar-reserva/consultar-reserva.component';
import { AlterarReservaComponent } from './alterar-reserva/alterar-reserva.component';
import { LoginComponent } from './login/login.component';



// Define as rotas da aplicação.
const routes: Routes = [
  // Rota para a página inicial.
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'inicio', component: InicioComponent },
  { path: 'listar-cliente', component: ListarClienteComponent },
  { path: 'inserir-cliente', component: InserirClienteComponent },
  { path: 'consultar-cliente/:id', component: ConsultarClienteComponent },
  { path: 'alterar-Cliente/:id', component: AlterarClienteComponent },
  { path: 'listar-quarto', component: ListarQuartoComponent }, // Corrigido: ListarQuartoComponent
  { path: 'inserir-quarto', component: InserirQuartoComponent }, // Corrigido: InserirQuartoComponent
  { path: 'consultar-quarto/:id', component: ConsultarQuartoComponent }, // Corrigido: ConsultarQuartoComponent
  { path: 'alterar-quarto/:id', component: AlterarQuartoComponent }, // Corrigido: AlterarQuartoComponent
  { path: 'inserir-reserva', component: InserirReservaComponent },
  { path: 'listar-reserva', component: ListarReservaComponent },
  { path: 'consultar-reserva/:id', component: ConsultarReservaComponent },
  { path: 'alterar-reserva/:id', component: AlterarReservaComponent },
  { path: 'login', component: LoginComponent }
  




];

// Define o módulo de rotas da aplicação.
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

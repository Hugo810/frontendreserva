import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'; // Importe BsDatepickerModule aqui

// Importa os componentes necessários.
import { InicioComponent } from './inicio/inicio.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { InserirClienteComponent } from './inserir-cliente/inserir-cliente.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { AlterarClienteComponent } from './alterar-cliente/alterar-cliente.component';
import { InserirQuartoComponent } from './inserir-quarto/inserir-quarto.component';
import { ConsultarQuartoComponent } from './consultar-quarto/consultar-quarto.component';
import { AlterarQuartoComponent } from './alterar-quarto/alterar-quarto.component';
import { ListarQuartoComponent } from './listar-quarto/listar-quarto.component';
import { InserirReservaComponent } from './inserir-reserva/inserir-reserva.component';
import { ListarReservaComponent } from './listar-reserva/listar-reserva.component';
import { ConsultarReservaComponent } from './consultar-reserva/consultar-reserva.component';
import { AlterarReservaComponent } from './alterar-reserva/alterar-reserva.component';
import { UsuarioService } from './usuario-service.service';
import { LoginComponent } from './login/login.component';
//import { ItemReservaComponent } from './item-reserva/item-reserva.component';


// Define o módulo da aplicação, chamado AppModule.
@NgModule({
  // Declaração dos componentes que pertencem a este módulo.
  declarations: [
    AppComponent,
    InicioComponent,
    ListarClienteComponent,
    InserirClienteComponent,
    ConsultarClienteComponent,
    AlterarClienteComponent,
    InserirQuartoComponent,
    ConsultarQuartoComponent,
    AlterarQuartoComponent,
    ListarQuartoComponent,
    InserirReservaComponent,
    ListarReservaComponent,
    ConsultarReservaComponent,
    AlterarReservaComponent,
    LoginComponent
    

  ],
  // Importação dos módulos necessários.
  imports: [
    BrowserModule, // Importa o BrowserModule para funcionalidades básicas do navegador.
    AppRoutingModule, // Importa o AppRoutingModule para configuração das rotas da aplicação.
    HttpClientModule, // Importa o HttpClientModule para fazer requisições HTTP.
    FormsModule, // Importa o FormsModule para lidar com formulários no Angular.
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),

  ],
  // Provedores de serviços.
  providers: [UsuarioService],
  // Componente inicial da aplicação.
  bootstrap: [AppComponent]
})

// Exporta a classe do módulo, AppModule.
export class AppModule { }

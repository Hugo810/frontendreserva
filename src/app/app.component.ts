// Importa o decorador 'Component' do módulo '@angular/core'
import { Component } from '@angular/core';

// Decorador que define metadados para a classe AppComponent.
@Component({
  // Define o seletor do componente, que é usado para inserir este componente em templates.
  selector: 'app-root',
  
  // Define o URL do arquivo HTML que contém o template do componente.
  templateUrl: './app.component.html',
  
  // Define o URL do arquivo CSS que contém os estilos específicos do componente.
  styleUrls: ['./app.component.css']
})

// Define a classe do componente, chamada AppComponent.
export class AppComponent {
  // Define uma propriedade chamada 'title' que armazena o título do aplicativo.
  title = 'frontendreservabd';
}

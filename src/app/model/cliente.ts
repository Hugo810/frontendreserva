import { TipoCliente } from "./tipocliente";

export class Cliente {
  id!: number;
  nome!: string;
  email!: string;
  tipo!: TipoCliente; // Atualiza o tipo do campo 'tipo' para o enum TipoCliente
}

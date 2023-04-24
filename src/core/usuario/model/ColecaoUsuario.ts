import Usuario from "../model/Usuario.ts";

export default interface ColecaoUsuario {
    adicionaUsuario(usuario: Usuario): Promise<void>
    buscarPorEmail(email: string): Promise<Usuario | null>
}
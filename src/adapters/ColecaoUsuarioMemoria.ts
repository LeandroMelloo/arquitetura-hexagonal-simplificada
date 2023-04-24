import ColecaoUsuario from "../core/usuario/model/ColecaoUsuario.ts";
import Usuario from "../core/usuario/model/Usuario.ts";

export default class ColecaoUsuarioMemoria implements ColecaoUsuario {
    static readonly usuario: Usuario[] = []

    async adicionaUsuario(usuario: Usuario): Promise<void> {
        ColecaoUsuarioMemoria.usuario.push(usuario);
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        return ColecaoUsuarioMemoria.usuario.find(usuario => usuario.email === email) ?? null; // return null
    }
}
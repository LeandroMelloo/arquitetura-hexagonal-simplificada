import ColecaoUsuarioMemoria from "./adapters/ColecaoUsuarioMemoria.ts";
// import InverterCripto from "./adapters/InverterCripto.ts";
import RealCripto from "./adapters/RealCripto.ts";
import LoginUsuario from "./core/usuario/service/LoginUsuario.ts";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario.ts";

const provedorCripto = new RealCripto();
const colecaoUsuario = new ColecaoUsuarioMemoria(); // persistência no banco de dados

// Registar usuario
const registrar = new RegistrarUsuario(colecaoUsuario, provedorCripto);
await registrar.executar({
    nome: "Leandro",
    email: "leandro@gmail.com",
    senha: "123456"

})

// Login Usuario
const login = new LoginUsuario(colecaoUsuario, provedorCripto);
const usuario = await login.executar({
    email: "leandro@gmail.com",
    senha: "123456"
})

console.log(usuario)
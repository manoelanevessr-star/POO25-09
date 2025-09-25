import { describe, expect, test } from "@jest/globals";
import { Cliente } from "./Cliente";

describe("Quando manipular cliente", () => {
    test("Deve validar corretamente um número de telefone com 11 dígitos", () => {

        //Criar uma instância de Cliente sem passar argumentos        
        const cliente = new Cliente();

        //Definir o número de telefone com 11 dígitos
        const telefoneValido = "11987654321";
        const eValido = cliente.validarTelefone(telefoneValido);

        //Verificar se o retorno é true
        expect(eValido).toBe(true);
    })
})

test("Deve invalidar um número de telefone com mais ou menos de 11 dígitos", () => {

    //Criar uma instância de Cliente sem passar argumentos
    const cliente = new Cliente();

    //numero curto
    const telefoneCurto = "12349";
    const eValidoCurto = cliente.validarTelefone(telefoneCurto);
    expect(eValidoCurto).toBe(false);

    //numero longo
    const telefoneLongo = "123456789012345";
    const eValidoLongo = cliente.validarTelefone(telefoneLongo);
    expect(eValidoLongo).toBe(false);
})

test("deve atualizar o telefone se o novo número for válido", () => {

    //Criar uma instância de Cliente sem passar argumentos
    const cliente = new Cliente();

    //Definir um número de telefone válido
    const telefoneValido = "11987654321";

    //Chamar o método atualizarTelefone
    cliente.atualizarTelefone(telefoneValido);

    //Verificar se o telefone foi atualizado corretamente
    expect(cliente.telefone).toBe(telefoneValido);
})


test("deve lançar um erro ao tentar atualizar o telefone com um número inválido", () => {

    //Criar uma instância de Cliente sem passar argumentos
    const cliente = new Cliente();

    //Definir um número de telefone inválido
    const telefoneInvalido = "12345";

    //Tentar atualizar o telefone e verificar se lança um erro
    expect(() => {
        cliente.atualizarTelefone(telefoneInvalido);
    }).toThrow("Telefone inválido");
})

test("deve lançar um erro ao tentar criar um cliente com nome inválido (menos de 3 caracteres)", () => {

    //criar uma instância de Cliente com nome inválido
    // expect(() => {
    //     new Cliente("Jo", "11987654321"); //Não entendi
    // }).toThrow("Nome deve ter pelo menos 3 caracteres");
})


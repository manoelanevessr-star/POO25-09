import { describe, expect, test } from "@jest/globals";
import { Item } from "./Item";

describe("Quando manipular item", () => {
    test("Deve alterar o preço final sem desconto", () => {

        const item: Item = new Item();
        const PRECO_DEFINIDO = 20;
        item.preco = PRECO_DEFINIDO;

        const precoFinal = item.obterPrecoFinal()

        expect(precoFinal).toBe(PRECO_DEFINIDO);

    })

    test("Deve aplicar um desconto e calcular o preço final corretamente",() => {
        //criar um item de preço 20
       const item = new Item();
       item.preco = 20;

        //aplicar um desconto de 10%
       item.aplicarDesconto(10)

       //Chamar o método obterPrecoFinal
       const precoFinal = item.obterPrecoFinal();

        //verificar se o preço final é 18
       expect(precoFinal).toBe(18);
    })

    test("Deve indicar que não está em promoção se não houver desconto", () => {
        //criar um item de preço 50
        const item: Item = new Item();
        item.preco = 50;

       //chamar o método emPromocao
       const estaEmPromocao = item.emPromocao();

         //verificar se o retorno é falso
        expect(estaEmPromocao).toBeFalsy()
    })

    test("Deve indicar que está em promoção após aplicar um desconto", () => {
        //criar um item de preço 100
        const item = new Item();
        item.preco = 100;
        item.aplicarDesconto(10);

        //chamar o método emPromocao
        const estaEmPromocao = item.emPromocao()

        //verificar se o retorno é verdadeiro
        expect(estaEmPromocao).toBeTruthy()

    })
})
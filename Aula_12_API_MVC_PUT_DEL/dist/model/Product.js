"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = exports.Modalidade = void 0;
class Modalidade {
    constructor(id, name, vegano) {
        this.id = id;
        this.name = name;
        this.vegano = vegano;
    }
}
exports.Modalidade = Modalidade;
////////
class Estoque {
    constructor(id, estoqueId, quatidade, precoVenda) {
        this.quantidade = 0;
        this.id = id;
        this.estoqueId = estoqueId;
        this.quantidade = quatidade;
        this.precoVenda = precoVenda;
    }
}
exports.Estoque = Estoque;
///////
/*
export class Venda {
    vendaId: any;
    cpfCliente: any;
    valorTotal: number;
    itensComprados: Estoque[];

    constructor(vendaId: any, cpfCliente: any, valorTotal: number, itensComprados: Estoque[]){
        this.vendaId = vendaId;
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }
}
*/

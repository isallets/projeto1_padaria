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
    constructor(estoqueId, quatidade, precoVenda) {
        this.estoqueId = estoqueId;
        this.quantidade = quatidade;
        this.precoVenda = precoVenda;
    }
}
exports.Estoque = Estoque;

class Venda {
    constructor(vendaId, cpfCliente, valorTotal, itensComprados){
        this.vendaId = vendaId;
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }
}
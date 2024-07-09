"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venda = exports.ItemVenda = exports.Estoque = exports.Modalidade = void 0;
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
class ItemVenda {
    constructor(estoqueId, name, quantidade) {
        this.estoqueId = estoqueId;
        this.name = name;
        this.quantidade = quantidade;
    }
}
exports.ItemVenda = ItemVenda;
class Venda {
    constructor(vendaId, cpfCliente, itens, valorTotal) {
        this.vendaId = vendaId;
        this.cpfCliente = cpfCliente;
        this.itens = itens;
        this.valorTotal = valorTotal;
    }
}
exports.Venda = Venda;

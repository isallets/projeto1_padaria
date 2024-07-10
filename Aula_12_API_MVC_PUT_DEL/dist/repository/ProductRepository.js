"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaRepository = exports.EstoqueRepository = exports.ModalidadeRepository = void 0;
const database_1 = require("../global/database");
class ModalidadeRepository {
    constructor() {
        this.modalidadeList = (0, database_1.getModalidadeList)();
    }
    insereModalidade(modalidade) {
        this.modalidadeList.push(modalidade);
    }
    filtraModalidadePorId(id) {
        const idNumber = parseInt(id, 10);
        console.log("123", idNumber, this.modalidadeList);
        return this.modalidadeList.find(modalidade => modalidade.id === idNumber);
    }
    filtraTodasModalidades() {
        return this.modalidadeList;
    }
    deletarModalidade(modalidade) {
        const index = this.modalidadeList.indexOf(modalidade);
        if (index !== -1) {
            this.modalidadeList.splice(index, 1);
        }
    }
    atualizarModalidade(modalidade) {
        const index = this.modalidadeList.indexOf(modalidade);
        if (index !== -1) {
            this.modalidadeList[index] = modalidade;
        }
        return index;
    }
}
exports.ModalidadeRepository = ModalidadeRepository;
////////
class EstoqueRepository {
    constructor() {
        this.estoqueList = [];
    }
    insereEstoque(estoque, id) {
        const estoqueEModalidade = Object.assign(Object.assign({}, estoque), { id });
        this.estoqueList.push(estoqueEModalidade, id);
    }
    buscaEstoquePorId(estoqueId) {
        const idNumber = parseInt(estoqueId, 10);
        return this.estoqueList.find(estoque => estoque.estoqueId === idNumber);
    }
    filtraTodoEstoque() {
        return this.estoqueList;
    }
    atualizarEstoque(estoque) {
        const index = this.estoqueList.indexOf(estoque);
        if (index !== -1) {
            this.estoqueList[index] = estoque;
        }
        return index;
    }
}
exports.EstoqueRepository = EstoqueRepository;
////
class VendaRepository {
    constructor() {
        this.vendaList = [];
    }
    criaVenda(venda) {
        this.vendaList.push(venda);
    }
    listarVenda() {
        return this.vendaList;
    }
    buscaVendaPorId(vendaId) {
        const idNumber = parseInt(vendaId, 10);
        return this.vendaList.find(venda => venda.vendaId === idNumber);
    }
}
exports.VendaRepository = VendaRepository;

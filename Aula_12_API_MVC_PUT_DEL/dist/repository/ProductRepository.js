"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaRepository = exports.EstoqueRepository = exports.ModalidadeRepository = void 0;
class ModalidadeRepository {
    constructor() {
        this.modalidadeList = [];
    }
    insereModalidade(modalidade) {
        this.modalidadeList.push(modalidade);
    }
    filtraModalidadePorId(id) {
        const idNumber = parseInt(id, 10);
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
    insereEstoque(estoque) {
        this.estoqueList.push(estoque);
    }
    buscaEstoquePorId(estoqueId) {
        const idNumber = parseInt(estoqueId, 10);
        return this.estoqueList.find(estoque => estoque.estoqueId === idNumber);
    }
    filtraTodoEstoque() {
        return this.estoqueList;
    }
    /*
        deletarModalidade(estoque:Estoque){
            const index = this.estoqueList.indexOf(estoque);
            if (index !== -1) {
                this.estoqueList.splice(index, 1);
            }
        }
        */
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

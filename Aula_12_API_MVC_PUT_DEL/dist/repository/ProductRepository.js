"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueRepository = exports.ModalidadeRepository = void 0;
class ModalidadeRepository {
    constructor() {
        this.modalidadeList = [];
    }
    insereModalidade(modalidade) {
        this.modalidadeList.push(modalidade);
    }
    filtraModalidadePorId(id) {
        return this.modalidadeList.find(modalidade => modalidade.id === id);
    }
    filtraTodasModalidades() {
        return this.modalidadeList;
    }
    deletarModalidades(modalidade) {
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
        return this.estoqueList.find(estoque => estoque.estoqueId === estoqueId);
    }
    filtraTodoEstoque() {
        return this.estoqueList;
    }
    /*
        deletarEstoque(estoque:Estoque){
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

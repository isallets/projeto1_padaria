"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueService = exports.ModalidadeService = void 0;
const Product_1 = require("../model/Product");
const ProductRepository_1 = require("../repository/ProductRepository");
class ModalidadeService {
    constructor() {
        this.modalidadeRepository = new ProductRepository_1.ModalidadeRepository();
    }
    cadastrarModalidade(modalidadeData) {
        const { id, name, vegano } = modalidadeData;
        if (!id || !name || vegano == null) {
            throw new Error("Informações incompletas");
        }
        const modalidadeEncontrado = this.consultarModalidade(undefined, name);
        if (modalidadeEncontrado) {
            throw new Error("Modalidade já cadastrada!!!");
        }
        const novaModalidade = new Product_1.Modalidade(id, name, vegano);
        this.modalidadeRepository.insereModalidade(novaModalidade);
        return novaModalidade;
    }
    consultarModalidade(id, name) {
        if (id) {
            console.log("Com ID");
            const idNumber = parseInt(id, 10);
            return this.modalidadeRepository.filtraModalidadePorId(idNumber);
        }
        console.log(id);
        return undefined;
    }
    getModalidade(ordem) {
        if (ordem === "desc") {
            return this.modalidadeRepository.filtraTodasModalidades().sort((a, b) => b.id - a.id);
        }
        return this.modalidadeRepository.filtraTodasModalidades().sort((a, b) => a.id - b.id);
    }
    deletarModalidades(id) {
        const product = this.consultarModalidade(id, undefined);
        if (!product) {
            throw new Error("Modalidade deletada com sucesso!!");
        }
        this.modalidadeRepository.deletarModalidades(product);
    }
    atualizarModalidade(modalidadeData) {
        const { id, name, vegano } = modalidadeData;
        if (!name || !id || vegano == null) {
            throw new Error("Informações incompletas");
        }
        let modalidadeEncontrada = this.consultarModalidade(id, undefined);
        if (!modalidadeEncontrada) {
            throw new Error("Modalidade atualizada com sucesso!!!");
        }
        modalidadeEncontrada.id = id;
        modalidadeEncontrada.name = name;
        modalidadeEncontrada.vegano = vegano;
        this.modalidadeRepository.atualizarModalidade(modalidadeEncontrada);
        return modalidadeEncontrada;
    }
}
exports.ModalidadeService = ModalidadeService;
////////
class EstoqueService {
    constructor() {
        this.estoqueRepository = new ProductRepository_1.EstoqueRepository();
    }
    adicionaEstoque(EstoqueData) {
        const { estoqueId, quantidade, precoVenda } = EstoqueData;
        if (!estoqueId || !quantidade || !precoVenda) {
            throw new Error("Informações incompletas");
        }
        const produtoEncontrado = this.buscarEstoque(estoqueId);
        if (produtoEncontrado) {
            throw new Error("Modalidade já cadastrada!!!"); //retirar isso
        }
        const novoEstoque = new Product_1.Estoque(estoqueId, quantidade, precoVenda);
        this.estoqueRepository.insereEstoque(novoEstoque);
        return novoEstoque;
    }
    buscarEstoque(id) {
        if (id) {
            console.log("Com ID");
            const itemNumber = parseInt(id, 10);
            return this.estoqueRepository.buscaEstoquePorId(itemNumber);
        }
        return undefined;
    }
    getEstoque(ordem) {
        if (ordem === "desc") {
            return this.estoqueRepository.filtraTodoEstoque().sort((a, b) => b.estoqueId - a.estoqueId);
        }
        return this.estoqueRepository.filtraTodoEstoque().sort((a, b) => a.estoqueId - b.estoqueId);
    }
    /*
    deletarModalidades(id:any){
        const product = this.consultarProduto(id, undefined);
        if(!product){
            throw new Error("Modalidade não encontrada");
        }

        this.productRepository.deletarModalidades(product);
    }
    */
    atualizarEstoque(estoqueData) {
        const { id, estoqueId, quantidade, precoVenda } = estoqueData;
        if (!id || !estoqueId || !quantidade || !precoVenda) {
            throw new Error("Informações incompletas");
        }
        let estoqueAtualizado = this.buscarEstoque(estoqueId);
        if (!estoqueAtualizado) {
            throw new Error("Item não encontrado no estoque!!!");
        }
        estoqueAtualizado.estoqueId = estoqueId;
        estoqueAtualizado.quantidade = quantidade;
        estoqueAtualizado.precoVenda = precoVenda;
        this.estoqueRepository.atualizarEstoque(estoqueAtualizado);
        return estoqueAtualizado;
    }
}
exports.EstoqueService = EstoqueService;

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
        const modalidadeEncontrado = this.consultarModalidade(id);
        if (modalidadeEncontrado) {
            throw new Error("Modalidade já cadastrada!!!");
        }
        const novaModalidade = new Product_1.Modalidade(id, name, vegano);
        this.modalidadeRepository.insereModalidade(novaModalidade);
        return novaModalidade;
    }
    consultarModalidade(id) {
        const idNumber = parseInt(id, 10);
        if (id) {
            console.log(id);
            return this.modalidadeRepository.filtraModalidadePorId(idNumber);
        }
        return undefined;
    }
    getModalidade(id) {
        if (id === "desc") {
            return this.modalidadeRepository.filtraTodasModalidades().sort((a, b) => b.id - a.id);
        }
        return this.modalidadeRepository.filtraTodasModalidades().sort((a, b) => a.id - b.id);
    }
    deletarModalidades(id) {
        const modalidade = this.consultarModalidade(id);
        if (!modalidade) {
            throw new Error("Modalidade não encontrada!!");
        }
        this.modalidadeRepository.deletarModalidade(modalidade); //SUBSTITUIR ACAO DENTRO DO IF
    }
    atualizarModalidade(modalidadeData) {
        const { id, name, vegano } = modalidadeData;
        if (!name || !id || vegano == null) {
            throw new Error("Informações incompletas");
        }
        let modalidadeEncontrada = this.consultarModalidade(id);
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
        const { id, estoqueId, quantidade, precoVenda } = EstoqueData;
        if (!id || !estoqueId || !quantidade || !precoVenda) {
            throw new Error("Informações incompletas");
        }
        const produtoEncontrado = this.buscarEstoque(estoqueId);
        if (produtoEncontrado) {
            throw new Error("Modalidade já cadastrada!!!"); //retirar isso
        }
        const novoEstoque = new Product_1.Estoque(id, estoqueId, quantidade, precoVenda);
        this.estoqueRepository.insereEstoque(novoEstoque);
        return novoEstoque;
    }
    buscarEstoque(estoqueId) {
        const idNumber = parseInt(estoqueId, 10);
        if (estoqueId) {
            console.log(estoqueId);
            return this.estoqueRepository.buscaEstoquePorId(idNumber);
        }
        throw new Error("Item não está no estoque!");
    }
    getEstoque(ordem) {
        if (ordem === "desc") {
            return this.estoqueRepository.filtraTodoEstoque().sort((a, b) => b.estoqueId - a.estoqueId);
        }
        return this.estoqueRepository.filtraTodoEstoque().sort((a, b) => a.estoqueId - b.estoqueId);
    }
    deletarEstoque(estoqueData) {
        const { id, estoqueId, quantidade, precoVenda } = estoqueData;
        if (!id || !estoqueId || !quantidade || !precoVenda) {
            throw new Error("Informações incompletas");
        }
        let estoqueAtualizado = this.buscarEstoque(estoqueId);
        if (!estoqueAtualizado) {
            throw new Error("Item não encontrado no estoque!!!");
        }
        estoqueAtualizado.id = id;
        estoqueAtualizado.estoqueId = estoqueId;
        estoqueAtualizado.quantidade -= quantidade;
        estoqueAtualizado.precoVenda = precoVenda;
        this.estoqueRepository.atualizarEstoque(estoqueAtualizado);
        return estoqueAtualizado;
    }
    atualizarEstoque(estoqueData) {
        const { id, estoqueId, quantidade, precoVenda } = estoqueData;
        if (!id || !estoqueId || !quantidade || !precoVenda) {
            throw new Error("Informações incompletas");
        }
        let estoqueAtualizado = this.buscarEstoque(estoqueId);
        if (!estoqueAtualizado) {
            throw new Error("Item não encontrado no estoque!!!");
        }
        estoqueAtualizado.id = id;
        estoqueAtualizado.estoqueId = estoqueId;
        estoqueAtualizado.quantidade += quantidade;
        estoqueAtualizado.precoVenda = precoVenda;
        this.estoqueRepository.atualizarEstoque(estoqueAtualizado);
        return estoqueAtualizado;
    }
}
exports.EstoqueService = EstoqueService;
////////
/*
export class VendaService {
    vendaRepository: VendaRepository = new VendaRepository();

    adicionaVenda(vendaData: any): Venda {
        let valorTotal:number;

        const {vendaId, cpfCliente, valorTotal, itensComprados} = vendaData;
        if(!vendaData){
            throw new Error("Informações incompletas");
        }
        let estoque: Estoque = this.buscarEstoque(itensComprados.estoqueId);

        const novaVenda = new Venda (vendaId, cpfCliente, valorTotal, itensComprados);
        this.vendaRepository.criaVenda(novaVenda);
        return novaVenda;
    }

    buscaVenda(id: any): Venda|undefined{
        if(id){
            console.log("Com ID");
            const idNumber: number = parseInt(id, 10);
            return this.vendaRepository.buscaVendaPorId(idNumber);

        }
        return undefined;
    }
}
*/ 

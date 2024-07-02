"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionaVenda = exports.atualizarEstoque = exports.deletarEstoque = exports.listarEstoque = exports.adicionarEstoque = exports.atualizarModalidade = exports.deletarModalidades = exports.listaModalidade = exports.cadastrarModalidade = void 0;
const ProductService_1 = require("../service/ProductService");
const modalidadeService = new ProductService_1.ModalidadeService();
function cadastrarModalidade(req, res) {
    try {
        const novaModalidade = modalidadeService.cadastrarModalidade(req.body);
        res.status(201).json({
            mensagem: "Modalidade adicionada com sucesso!",
            modalidade: novaModalidade
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.cadastrarModalidade = cadastrarModalidade;
;
function listaModalidade(req, res) {
    try {
        res.status(200).json(modalidadeService.getModalidade(req.query.ordem));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.listaModalidade = listaModalidade;
;
function deletarModalidades(req, res) {
    try {
        modalidadeService.deletarModalidades(req.query.id);
        res.status(200).json({ message: "Modalidade deletada com sucesso!" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.deletarModalidades = deletarModalidades;
;
function atualizarModalidade(req, res) {
    try {
        const novaModalidade = modalidadeService.atualizarModalidade(req.body);
        res.status(201).json({
            mensagem: "Modalidade atualizado com sucesso!",
            modalidade: novaModalidade
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.atualizarModalidade = atualizarModalidade;
;
///////
const estoqueService = new ProductService_1.EstoqueService();
function adicionarEstoque(req, res) {
    try {
        const novoEstoque = estoqueService.adicionaEstoque(req.body);
        res.status(201).json({
            mensagem: "Item adicionado com sucesso no estoque!",
            estoque: novoEstoque
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.adicionarEstoque = adicionarEstoque;
;
function listarEstoque(req, res) {
    try {
        res.status(200).json(estoqueService.getEstoque(req.query.ordem));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.listarEstoque = listarEstoque;
;
function deletarEstoque(req, res) {
    try {
        const { id } = req.body;
        estoqueService.deletarEstoque(id);
        res.status(200).json({ message: "Item deletado com sucesso!" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.deletarEstoque = deletarEstoque;
;
function atualizarEstoque(req, res) {
    try {
        const novoEstoque = estoqueService.atualizarEstoque(req.body);
        res.status(201).json({
            mensagem: "Estoque atualizado com sucesso!",
            estoque: novoEstoque
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.atualizarEstoque = atualizarEstoque;
;
/////
const vendaService = new ProductService_1.VendaService();
function adicionaVenda(req, res) {
    try {
        const novaVenda = vendaService.adicionaVenda(req.body);
        res.status(200).json({
            mensagem: "Venda efetuada com sucesso!",
            Venda: novaVenda
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.adicionaVenda = adicionaVenda;
;

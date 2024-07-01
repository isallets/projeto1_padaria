"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarModalidade = cadastrarModalidade;
exports.listaModalidade = listaModalidade;
exports.deletarModalidades = deletarModalidades;
exports.atualizarModalidade = atualizarModalidade;
exports.adicionarEstoque = adicionarEstoque;
exports.listarEstoque = listarEstoque;
exports.deletarEstoque = deletarEstoque;
exports.atualizarEstoque = atualizarEstoque;
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
;
function listaModalidade(req, res) {
    try {
        res.status(200).json(modalidadeService.getModalidade(req.query.ordem));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
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
;
function listarEstoque(req, res) {
    try {
        res.status(200).json(estoqueService.getEstoque(req.query.ordem));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function deletarEstoque(req, res) {
    try {
        estoqueService.deletarEstoque(req.query.id);
        res.status(200).json({ message: "Item deletado com sucesso!" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
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
;

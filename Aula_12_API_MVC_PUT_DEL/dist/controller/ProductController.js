"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarModalidade = cadastrarModalidade;
exports.listaModalidade = listaModalidade;
exports.filtraModalidadePorId = filtraModalidadePorId;
exports.deletarModalidade = deletarModalidade;
exports.atualizarModalidade = atualizarModalidade;
exports.adicionarEstoque = adicionarEstoque;
exports.listarEstoque = listarEstoque;
exports.buscaEstoquePorId = buscaEstoquePorId;
exports.deletarEstoque = deletarEstoque;
exports.atualizarEstoque = atualizarEstoque;
exports.adicionaVenda = adicionaVenda;
exports.buscaVenda = buscaVenda;
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
        res.status(200).json(modalidadeService.getModalidade(req.query.id));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function filtraModalidadePorId(req, res) {
    try {
        const modalidade = modalidadeService.consultarModalidade(req.query.id);
        if (modalidade) {
            res.status(200).json(modalidade);
        }
        else {
            res.status(404).json({ message: "Modalidade não encontrada" });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
function deletarModalidade(req, res) {
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
        res.status(200).json({
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
        res.status(200).json(estoqueService.getEstoque(req.query.estoqueId));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function buscaEstoquePorId(req, res) {
    try {
        const estoque = estoqueService.buscarEstoque(req.query.estoqueId);
        if (estoque) {
            res.status(200).json(estoque);
        }
        else {
            res.status(404).json({ message: "Item não encontrado no estoque" });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
function deletarEstoque(req, res) {
    try {
        const novoEstoque = estoqueService.deletarEstoque(req.body);
        res.status(200).json({ message: "Item deletado com sucesso!",
            estoque: novoEstoque
        });
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
/////
const vendaService = new ProductService_1.VendaService();
function adicionaVenda(req, res) {
    try {
        const { vendaId, cpfCliente, itensVenda } = req.body;
        const novaVenda = vendaService.adicionaVenda(vendaId, cpfCliente, itensVenda);
        res.status(200).json({
            mensagem: "Venda efetuada com sucesso!",
            Venda: novaVenda
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function buscaVenda(req, res) {
    try {
        const venda = vendaService.buscaVenda(req.query.vendaId);
        if (venda) {
            res.status(200).json(venda);
        }
        else {
            res.status(404).json({ message: "Venda não encontrada" });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizarEstoque = exports.deletarEstoque = exports.buscaEstoquePorId = exports.listarEstoque = exports.adicionarEstoque = exports.atualizarModalidade = exports.deletarModalidade = exports.filtraModalidadePorId = exports.listaModalidade = exports.cadastrarModalidade = void 0;
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
        res.status(200).json(modalidadeService.getModalidade(req.query.id));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.listaModalidade = listaModalidade;
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
exports.filtraModalidadePorId = filtraModalidadePorId;
function deletarModalidade(req, res) {
    try {
        modalidadeService.deletarModalidades(req.query.id);
        res.status(200).json({ message: "Modalidade deletada com sucesso!" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.deletarModalidade = deletarModalidade;
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
        res.status(200).json(estoqueService.getEstoque(req.query.estoqueId));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.listarEstoque = listarEstoque;
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
exports.buscaEstoquePorId = buscaEstoquePorId;
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
/*
const vendaService = new VendaService();

export function adicionaVenda (req: Request, res: Response){
    try {
        const novaVenda = vendaService.adicionaVenda(req.body);
        res.status(200).json(
            {
                mensagem:"Venda efetuada com sucesso!",
                Venda:novaVenda
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};
*/ 

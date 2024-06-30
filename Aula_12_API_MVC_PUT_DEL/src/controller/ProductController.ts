import { Request, Response } from "express";
import { ModalidadeService, EstoqueService } from "../service/ProductService";

const modalidadeService = new ModalidadeService();

export function cadastrarModalidade (req: Request, res: Response){
    try {
        const novaModalidade = modalidadeService.cadastrarModalidade(req.body);
        res.status(201).json(
            {
                mensagem:"Modalidade adicionada com sucesso!",
                modalidade:novaModalidade
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};


export function listaModalidade (req: Request, res: Response){
    try {
        res.status(200).json(modalidadeService.getModalidade(req.query.ordem));
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export function deletarModalidades(req: Request, res: Response){
    try{
        modalidadeService.deletarModalidades(req.query.id);
        res.status(200).json({message: "Modalidade deletada com sucesso!"});
    }catch(error:any){
        res.status(400).json({message: error.message})
    }
};

export function atualizarModalidade (req: Request, res: Response){
    try {
        const novaModalidade = modalidadeService.atualizarModalidade(req.body);
        res.status(201).json(
            {
                mensagem:"Modalidade atualizado com sucesso!",
                modalidade:novaModalidade
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

///////

const estoqueService = new EstoqueService();

export function adicionarEstoque (req: Request, res: Response){
    try {
        const novoEstoque = estoqueService.adicionaEstoque(req.body);
        res.status(201).json(
            {
                mensagem:"Item adicionado com sucesso no estoque!",
                estoque:novoEstoque
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};


export function listarEstoque (req: Request, res: Response){
    try {
        res.status(200).json(estoqueService.getEstoque(req.query.ordem));
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

/*
export function deletarModalidades(req: Request, res: Response){
    try{
        productService.deletarModalidades(req.query.id);
        res.status(200).json({message: "Modalidade deletada com sucesso!"});
    }catch(error:any){
        res.status(400).json({message: error.message})
    }
};
*/

export function atualizarEstoque (req: Request, res: Response){
    try {
        const novoEstoque = estoqueService.atualizarEstoque(req.body);
        res.status(201).json(
            {
                mensagem:"Estoque atualizado com sucesso!",
                estoque:novoEstoque
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

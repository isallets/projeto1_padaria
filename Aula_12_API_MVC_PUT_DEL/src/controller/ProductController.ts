import { Request, Response } from "express";
import { ModalidadeService, EstoqueService, VendaService } from "../service/ProductService";

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
        res.status(200).json(modalidadeService.getModalidade(req.query.id));//acho que nao precisa desse id
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export function filtraModalidadePorId(req: Request, res: Response) {
    try {
        const modalidade = modalidadeService.consultarModalidade(req.query.id);

        if (modalidade) {
            res.status(200).json(modalidade);
        } else {
            res.status(404).json({ message: "Modalidade não encontrada" });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export function deletarModalidade(req: Request, res: Response){
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
        res.status(200).json(
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
        res.status(200).json(estoqueService.getEstoque(req.query.estoqueId));
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export function buscaEstoquePorId(req: Request, res: Response) {
    try {
        const estoque = estoqueService.buscarEstoque(req.query.estoqueId);

        if (estoque) {
            res.status(200).json(estoque);
        } else {
            res.status(404).json({ message: "Item não encontrado no estoque" });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}


export function deletarEstoque(req: Request, res: Response){
    try{
        const novoEstoque = estoqueService.deletarEstoque(req.body)
        res.status(200).json(
            {message: "Item deletado com sucesso!",
            estoque:novoEstoque
        });
    }catch(error:any){
        res.status(400).json({message: error.message})
    }
};

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

/////
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
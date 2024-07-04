import { Estoque, Modalidade, Venda } from "../model/Product";
import { ModalidadeRepository, EstoqueRepository, VendaRepository } from "../repository/ProductRepository";

export class ModalidadeService{

    modalidadeRepository: ModalidadeRepository = new ModalidadeRepository();

    cadastrarModalidade(modalidadeData: any): Modalidade {
        const {id, name, vegano} = modalidadeData;
        if(!id || !name || vegano == null){
            throw new Error("Informações incompletas");
        }

        const modalidadeEncontrado = this.consultarModalidade(id);
        if(modalidadeEncontrado){
            throw new Error("Modalidade já cadastrada!!!");
        }
        const novaModalidade = new Modalidade(id, name, vegano);
        this.modalidadeRepository.insereModalidade(novaModalidade);
        return novaModalidade;
    }

    consultarModalidade(id: any): Modalidade|undefined{        
        const idNumber: number = parseInt(id, 10); 
        if(id){
            console.log(id);
            return this.modalidadeRepository.filtraModalidadePorId(idNumber);
        }
        return undefined; 
    }
    
    getModalidade(id:any):Modalidade[]{
        if(id === "desc"){
            return this.modalidadeRepository.filtraTodasModalidades().sort((a, b) => b.id - a.id);
        }
        return this.modalidadeRepository.filtraTodasModalidades().sort((a, b) => a.id - b.id);
    }
    
    deletarModalidades(id:any){
        const modalidade = this.consultarModalidade(id);
        if(!modalidade){
            throw new Error("Modalidade não encontrada!!");
        }

        this.modalidadeRepository.deletarModalidade(modalidade); //SUBSTITUIR ACAO DENTRO DO IF
    }
    
    atualizarModalidade(modalidadeData: any): Modalidade {
        const {id, name, vegano} = modalidadeData;
        if(!name || !id || vegano == null){
            throw new Error("Informações incompletas");
        }

        let modalidadeEncontrada = this.consultarModalidade(id);
        if(!modalidadeEncontrada){
            throw new Error("Modalidade atualizada com sucesso!!!");
        }
        modalidadeEncontrada.id = id;
        modalidadeEncontrada.name = name;
        modalidadeEncontrada.vegano = vegano;
        this.modalidadeRepository.atualizarModalidade (modalidadeEncontrada);
        return modalidadeEncontrada;
    }
}

////////

export class EstoqueService{

    estoqueRepository: EstoqueRepository = new EstoqueRepository();

    adicionaEstoque(EstoqueData: any): Estoque {
        const {id, estoqueId, quantidade, precoVenda} = EstoqueData;
        if(!estoqueId){
            throw new Error("Informações incompletas");
        }

        const produtoEncontrado = this.buscarEstoque(estoqueId);
        if(produtoEncontrado){
            throw new Error("Modalidade já cadastrada!!!"); //retirar isso
        }
        const novoEstoque = new Estoque(id,estoqueId, quantidade, precoVenda);
        this.estoqueRepository.insereEstoque(novoEstoque);
        return novoEstoque;
    }

    buscarEstoque(estoqueId: any): Estoque|undefined{
        const idNumber: number = parseInt(estoqueId, 10);

        if(estoqueId){
            console.log(estoqueId);
            return this.estoqueRepository.buscaEstoquePorId(idNumber);

        }   
        throw new Error ("Item não está no estoque!");
    }
   
    getEstoque(ordem:any):Estoque[]{
        if(ordem === "desc"){
            return this.estoqueRepository.filtraTodoEstoque().sort((a, b) => b.estoqueId - a.estoqueId);
        }
        return this.estoqueRepository.filtraTodoEstoque().sort((a, b) => a.estoqueId - b.estoqueId);
    }
    
    deletarEstoque(estoqueData: any): Estoque {
        const {id, estoqueId, quantidade, precoVenda} = estoqueData;
        if(!estoqueData){
            throw new Error("Informações incompletas");
        }

        let estoqueAtualizado = this.buscarEstoque(estoqueId);
        if(!estoqueAtualizado){
            throw new Error("Item não encontrado no estoque!!!");
        }
        estoqueAtualizado.id = id;
        estoqueAtualizado.estoqueId = estoqueId;
        estoqueAtualizado.quantidade -= quantidade;
        estoqueAtualizado.precoVenda = precoVenda;
        this.estoqueRepository.atualizarEstoque (estoqueAtualizado);
        return estoqueAtualizado;
    }
    
    atualizarEstoque(estoqueData: any): Estoque {
        const {id, estoqueId, quantidade, precoVenda} = estoqueData;
        if(!estoqueData){
            throw new Error("Informações incompletas");
        }

        let estoqueAtualizado = this.buscarEstoque(estoqueId);
        if(!estoqueAtualizado){
            throw new Error("Item não encontrado no estoque!!!");
        }
        estoqueAtualizado.id = id;
        estoqueAtualizado.estoqueId = estoqueId;
        estoqueAtualizado.quantidade += quantidade;
        estoqueAtualizado.precoVenda = precoVenda;
        this.estoqueRepository.atualizarEstoque (estoqueAtualizado);
        return estoqueAtualizado;
    }
}

////////

export class VendaService {
    vendaRepository: VendaRepository = new VendaRepository();

    adicionaVenda(vendaData: any): Venda {
        const {vendaId, cpfCliente, valorTotal, itensComprados} = vendaData;
        if(!vendaData){
            throw new Error("Informações incompletas");
        }

        const novaVenda = new Venda (vendaId, cpfCliente, valorTotal, itensComprados);
        this.vendaRepository.gravaVenda(novaVenda);
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
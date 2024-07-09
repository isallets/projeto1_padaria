import { Estoque, Modalidade, Venda, ItemVenda } from "../model/Product";
import { ModalidadeRepository, EstoqueRepository, VendaRepository} from "../repository/ProductRepository";

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

        this.modalidadeRepository.deletarModalidade(modalidade); 
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
    modalidadeRepository: ModalidadeRepository = new ModalidadeRepository();
    modalidadeService: ModalidadeService = new ModalidadeService();

    adicionaEstoque(EstoqueData: any): Estoque {
        const {id, estoqueId, quantidade, precoVenda} = EstoqueData;
        if(!id || !estoqueId || !quantidade || !precoVenda){
            throw new Error("Informações incompletas");
        }
        const modalidadeEncontrado = this.modalidadeService.consultarModalidade(id);
        if(!modalidadeEncontrado){
            throw new Error("Modalidade não cadastrada!!!");
        }
        const produtoEncontrado = this.estoqueRepository.buscaEstoquePorId(estoqueId);
        if (produtoEncontrado) {
            throw new Error("Produto já cadastrado!!!");
        }
        const novoEstoque = new Estoque(id, estoqueId, quantidade, precoVenda);
        this.estoqueRepository.insereEstoque(novoEstoque, id);
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
        if(!id || !estoqueId || !quantidade || !precoVenda){
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
        if(!id || !estoqueId || !quantidade || !precoVenda){
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
    estoqueRepository: EstoqueRepository = new EstoqueRepository();
    modalidadeRepository: ModalidadeRepository = new ModalidadeRepository();
    
    adicionaVenda(vendaId: string, cpfCliente: string, itensVenda: { estoqueId: any, quantidade: number }[]): Venda | undefined {
       if(!vendaId || !cpfCliente || !itensVenda){
            throw new Error("Informações incompletas");
        }
        const itens: ItemVenda[] = [];
        let valorTotal = 0;

        const vendaEncontrada = this.buscaVenda(vendaId);
        if(vendaEncontrada){
            throw new Error("Venda já realizada!!!"); 
        }
        for (const item of itensVenda) {
            const modalidade = this.modalidadeRepository.filtraModalidadePorId(item.estoqueId);

            if (!modalidade) {
               throw new Error(`Modalidade não encontrada`);
            }
            
            const produto = this.estoqueRepository.buscaEstoquePorId(item.estoqueId);
            if(!produto){
                throw new Error("Produto não encontrado");
            }
            if(produto.quantidade < item.quantidade){
                throw new Error("Estoque insuficiente");
            }

            const novoEstoque: Estoque = {...produto, quantidade: produto.quantidade - item.quantidade};
            this.estoqueRepository.atualizarEstoque(novoEstoque);

            const valor = item.quantidade * produto.precoVenda;
            valorTotal += valor;
            const itemVenda = new ItemVenda(item.estoqueId,modalidade.name, item.quantidade);
            itens.push(itemVenda);
        }

        const novaVenda = new Venda (vendaId, cpfCliente, itens, valorTotal);
        this.vendaRepository.criaVenda(novaVenda);

        return novaVenda;
    }

    buscaVenda(vendaId: any): Venda|undefined{
        if(vendaId){
            console.log("Com ID");
            const idNumber: number = parseInt(vendaId, 10);
            return this.vendaRepository.buscaVendaPorId(idNumber);

        }   
        return undefined;
    }
}

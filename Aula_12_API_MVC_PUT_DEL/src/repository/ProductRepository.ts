import { Estoque, Modalidade } from "../model/Product";

export class ModalidadeRepository{
    modalidadeList: Modalidade[] = [];

    insereModalidade(modalidade: Modalidade){
        this.modalidadeList.push(modalidade);
    }

    filtraModalidadePorId(id:any): Modalidade|undefined{
        const idNumber = parseInt(id, 10);
        return this.modalidadeList.find(modalidade => modalidade.id === idNumber);
    }

    filtraTodasModalidades(){
        return this.modalidadeList;
    }

    deletarModalidade(modalidade:Modalidade){
        const index = this.modalidadeList.indexOf(modalidade);
        if (index !== -1) {
            this.modalidadeList.splice(index, 1);
        }
    }

    atualizarModalidade(modalidade:Modalidade): number{
        const index = this.modalidadeList.indexOf(modalidade);
        if(index !== -1){
            this.modalidadeList[index] = modalidade;
        }
        return index;
    }
}

////////

export class EstoqueRepository {
    estoqueList: Estoque[] = [];

    insereEstoque(estoque: Estoque){
        this.estoqueList.push(estoque);
    }

    buscaEstoquePorId(estoqueId:any): Estoque|undefined{
        const idNumber = parseInt(estoqueId, 10);
        return this.estoqueList.find(estoque => estoque.estoqueId === idNumber);
    }

    filtraTodoEstoque(){
        return this.estoqueList;
    }
/*
    deletarModalidade(estoque:Estoque){
        const index = this.estoqueList.indexOf(estoque);
        if (index !== -1) {
            this.estoqueList.splice(index, 1);
        }
    }
    */

    atualizarEstoque(estoque:Estoque){
        const index = this.estoqueList.indexOf(estoque);
        if(index !== -1){
            this.estoqueList[index] = estoque;
        }
        return index;
    }
}

////
/*
export class VendaRepository {
    itensComprados: Venda[] = [];
    
    criaVenda(venda: Venda){
        this.itensComprados.push(venda);
    }
    buscaVendaPorId(vendaId:any): Venda|undefined{
        const idNumber = parseInt(vendaId, 10);
        return this.itensComprados.find(venda => venda.vendaId === idNumber);
    }
}
*/
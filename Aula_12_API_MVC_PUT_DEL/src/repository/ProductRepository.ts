import { getModalidadeList } from "../global/database";
import { Estoque, Modalidade, Venda } from "../model/Product";


export class ModalidadeRepository{
    modalidadeList: Modalidade[] = getModalidadeList();

    insereModalidade(modalidade: Modalidade){
        this.modalidadeList.push(modalidade);
    }

    filtraModalidadePorId(id:any): Modalidade|undefined{
        const idNumber = parseInt(id, 10);
        console.log("123", idNumber, this.modalidadeList)
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

    insereEstoque(estoque: Estoque,id:any){
        const estoqueEModalidade = {...estoque, id}
        this.estoqueList.push(estoqueEModalidade, id);
    }

    buscaEstoquePorId(estoqueId:any): Estoque|undefined{
        const idNumber = parseInt(estoqueId, 10);
        return this.estoqueList.find(estoque => estoque.estoqueId === idNumber);
    }

    filtraTodoEstoque(){
        return this.estoqueList;
    }

    atualizarEstoque(estoque:Estoque){
        const index = this.estoqueList.indexOf(estoque);
        if(index !== -1){
            this.estoqueList[index] = estoque;
        }
        return index;
    }
}

////

export class VendaRepository {
    private vendaList : Venda[] = [];
    
    criaVenda(venda: Venda){
        this.vendaList.push(venda);
    }
    listarVenda() : Venda[] {
        return this.vendaList;
    }
    buscaVendaPorId(vendaId:any): Venda|undefined{
        const idNumber = parseInt(vendaId, 10);
        return this.vendaList.find(venda => venda.vendaId === idNumber);
    }
}

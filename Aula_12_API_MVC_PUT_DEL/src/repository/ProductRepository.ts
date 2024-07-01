import { Estoque, Modalidade } from "../model/Product";

export class ModalidadeRepository{
    modalidadeList: Modalidade[] = [];

    insereModalidade(modalidade: Modalidade){
        this.modalidadeList.push(modalidade);
    }

    filtraModalidadePorId(id:number): Modalidade|undefined{
        return this.modalidadeList.find(modalidade => modalidade.id === id);
    }

    filtraTodasModalidades():Modalidade[]{
        return this.modalidadeList;
    }

    deletarModalidades(modalidade:Modalidade){
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

    buscaEstoquePorId(estoqueId:number): Estoque|undefined{
        return this.estoqueList.find(estoque => estoque.estoqueId === estoqueId);
    }

    filtraTodoEstoque():Estoque[]{
        return this.estoqueList;
    }
/*
    deletarEstoque(estoque:Estoque){
        const index = this.estoqueList.indexOf(estoque);
        if (index !== -1) {
            this.estoqueList.splice(index, 1);
        }
    }
    */
    atualizarEstoque(estoque:Estoque): number{
        const index = this.estoqueList.indexOf(estoque);
        if(index !== -1){
            this.estoqueList[index] = estoque;
        }
        return index; //falta funcao pra adicioanr
    }
}

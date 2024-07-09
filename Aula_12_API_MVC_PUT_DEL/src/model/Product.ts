export class Modalidade{
    id:any;
    name:string;
    vegano:boolean;

    constructor(id: any, name:string, vegano:boolean){
        this.id = id;
        this.name = name;
        this.vegano = vegano;
    }
}

////////

export class Estoque{
    id: Modalidade;
    estoqueId:any;
    quantidade:number=0;
    precoVenda:number;

    constructor(id: Modalidade, estoqueId: any, quatidade:number, precoVenda:number){
        this.id = id;
        this.estoqueId = estoqueId;
        this.quantidade = quatidade;
        this.precoVenda = precoVenda;
    }
}

///////
export class ItemVenda {
    estoqueId: any;
    name: string;
    quantidade: number;

    constructor(estoqueId: any, name: string, quantidade: number) {
        this.estoqueId = estoqueId;
        this.name = name;
        this.quantidade = quantidade;
    }
}

export class Venda {
    vendaId: any;
    cpfCliente: any;
    itens: ItemVenda[];
    valorTotal: number;

    constructor(vendaId: any, cpfCliente: any, itens: ItemVenda[], valorTotal: number){
        this.vendaId = vendaId;
        this.cpfCliente = cpfCliente;
        this.itens = itens;
        this.valorTotal = valorTotal;
    }
}

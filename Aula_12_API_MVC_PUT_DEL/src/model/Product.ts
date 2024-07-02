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
    id: any;
    estoqueId:any;
    quantidade:number=0;
    precoVenda:number;

    constructor(id: any, estoqueId: any, quatidade:number, precoVenda:number){
        this.id = id;
        this.estoqueId = estoqueId;
        this.quantidade = quatidade;
        this.precoVenda = precoVenda;
    }
}

///////

export class Venda {
    vendaId: number;
    cpfCliente: any;
    valorTotal: number;
    itensComprados: any;

    constructor(vendaId: number, cpfCliente: any, valorTotal: number, itensComprados: any){
        this.vendaId = vendaId;
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }
}
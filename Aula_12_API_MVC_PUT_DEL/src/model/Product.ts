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
    estoqueId:number;
    quantidade:number;
    precoVenda:number;

    constructor(estoqueId: any, quatidade:number, precoVenda:number){
        this.estoqueId = estoqueId;
        this.quantidade = quatidade;
        this.precoVenda = precoVenda;
    }
}
export class Item {
    id: number;
    name: string;
    cost: number;

    constructor(id, name,cost=0){
        this.id=id
        this.name=name
        this.cost=cost
    }

}

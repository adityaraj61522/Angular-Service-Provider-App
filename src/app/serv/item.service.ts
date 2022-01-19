import { Injectable } from '@angular/core';

import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  item: Item[] = [

    new Item(1, 'product 1', 200),
    new Item(2, 'product 2', 100),
    new Item(3, 'product 3', 500),
    new Item(4, 'product 4', 500),
  ]

  constructor() { }

    getitems():Item[]{

      return this.item
    }
  
}

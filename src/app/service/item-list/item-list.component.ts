import { Component, OnInit } from '@angular/core';

import { ItemService } from 'src/app/serv/item.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  itemList:Item[] = []

  constructor(private itemservice:ItemService) { }

  ngOnInit() {
    this.itemList = this.itemservice.getitems()
  }

}

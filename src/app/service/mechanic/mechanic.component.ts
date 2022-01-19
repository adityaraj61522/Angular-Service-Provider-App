import { Component, OnInit } from '@angular/core';

import { ItemService } from 'src/app/serv/item.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.scss']
})
export class MechanicComponent implements OnInit {

  itemList:Item[] = []

  constructor(private itemservice:ItemService) { }

  ngOnInit() {
    this.itemList = this.itemservice.getitems()
  }

}

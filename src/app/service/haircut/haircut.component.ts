import { Component, OnInit } from '@angular/core';

import { ItemService } from 'src/app/serv/item.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-haircut',
  templateUrl: './haircut.component.html',
  styleUrls: ['./haircut.component.scss']
})
export class HaircutComponent implements OnInit {

  itemList:Item[] = []

  constructor(private itemservice:ItemService) { }

  ngOnInit() {
    this.itemList = this.itemservice.getitems()
  }

}

import { Component, OnInit } from '@angular/core';

import { ItemService } from 'src/app/serv/item.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-plumber',
  templateUrl: './plumber.component.html',
  styleUrls: ['./plumber.component.scss']
})
export class PlumberComponent implements OnInit {

  itemList:Item[] = []

  constructor(private itemservice:ItemService) { }

  ngOnInit() {
    this.itemList = this.itemservice.getitems()
  }

}

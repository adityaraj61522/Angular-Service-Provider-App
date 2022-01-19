import { Component, OnInit } from '@angular/core';

import { ItemService } from 'src/app/serv/item.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-electrician',
  templateUrl: './electrician.component.html',
  styleUrls: ['./electrician.component.scss']
})
export class ElectricianComponent implements OnInit {

  itemList:Item[] = []

  constructor(private itemservice:ItemService) { }

  ngOnInit() {
    this.itemList = this.itemservice.getitems()
  }

}

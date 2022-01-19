import { Component, OnInit,Input } from '@angular/core';
import { Item } from 'src/app/models/item';
import { MessengerService } from 'src/app/serv/messenger.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input() itemdetails:Item[] = []

  constructor( private msg: MessengerService) { }

  quantity=0

  ngOnInit() {
    
  }

  handelerAddToCart(){
    this.msg.sendMsgInc(this.itemdetails);
    this.quantity +=1
}
  decreseItem(){
    this.msg.sendMsgDec(this.itemdetails)
    this.quantity -= 1
  }
}

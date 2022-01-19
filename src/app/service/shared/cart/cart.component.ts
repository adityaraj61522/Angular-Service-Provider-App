import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/serv/messenger.service'
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  cartItems=[];

  cartTotal=0

  constructor(private msg:MessengerService) { }

  ngOnInit() {

    this .msg.getMsgInc().subscribe( (itemdetails:Item) =>{
      let itemExists = false
      for(let i in this.cartItems){
            if(this.cartItems[i].productId===itemdetails.id){
              this.cartItems[i].qty++
              itemExists=true
              break;
            }
          }

        if(!itemExists){
            this.cartItems.push({
            productId:itemdetails.id,
            productName:itemdetails.name,
            qty:1,
            cost:itemdetails.cost,            
        })
      }    
      this.cartTotal=0
      this.cartItems.forEach(item=>{
      this.cartTotal += (item.qty * item.cost)
    })
      
  })
  this .msg.getMsgDec().subscribe( (itemdetails:Item) =>{

    let itemExists = false

    for(let i in this.cartItems){
          if(this.cartItems[i].productId===itemdetails.id){
            this.cartItems[i].qty--
            itemExists=true
            break;
          }
        }  
    this.cartTotal=0
    this.cartItems.forEach(item=>{
    this.cartTotal += (item.qty * item.cost)
  })
    
})

}

}

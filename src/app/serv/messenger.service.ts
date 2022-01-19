import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  Increase = new Subject();
  Decrease = new Subject();

  constructor() { }

  sendMsgInc(product){
    this.Increase.next(product)
  }
  sendMsgDec(product){
    this.Decrease.next(product)
  }
  getMsgInc(){
    return this.Increase.asObservable()
  }
  getMsgDec(){
    return this.Decrease.asObservable()
  }

}

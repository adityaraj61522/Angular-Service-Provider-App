import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServcatService {

  subject = new Subject();

  constructor() { }
    sendcatno(num){
      this.subject.next(num)
    }
    getcatno(){
      return this.subject.asObservable()
    }
}

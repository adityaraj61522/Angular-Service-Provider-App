import { Component, OnInit } from '@angular/core';
import { ServcatService } from 'src/app/serv/servcat.service';

@Component({
  selector: 'app-service-catagories',
  templateUrl: './service-catagories.component.html',
  styleUrls: ['./service-catagories.component.scss']
})
export class ServiceCatagoriesComponent implements OnInit {

  catnos :number ;

  constructor(private catno: ServcatService) { }

  ngOnInit() {
  } 
  carpenter(){
    this.catno.sendcatno(this.catnos=3);
}
  plumber(){
  this.catno.sendcatno(this.catnos=2);
}
  mechanic(){
  this.catno.sendcatno(this.catnos=4);
}
  electrician(){
  this.catno.sendcatno(this.catnos=1);
}
  haircut(){
  this.catno.sendcatno(this.catnos=5);
}

}

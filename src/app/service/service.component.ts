import { Component, OnInit } from '@angular/core';
import { ServcatService } from 'src/app/serv/servcat.service';
import { ChildActivationStart } from '@angular/router';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(private catno:ServcatService) { }
  
  
  catnor : unknown =1;
  ngOnInit() {
    this.catno.getcatno().subscribe((catnos) =>{
      console.log(catnos)
      this.catnor=catnos;
  })
  console.log(this.catnor)
}}

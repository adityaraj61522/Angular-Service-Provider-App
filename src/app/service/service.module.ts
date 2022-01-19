import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ServiceComponent } from './service.component';
import { SharedComponent } from './shared/shared.component';
import { ItemListComponent } from './item-list/item-list.component';
import { NavComponent } from './shared/nav/nav.component';
import { ServiceCatagoriesComponent } from './shared/service-catagories/service-catagories.component';
import { CartComponent } from './shared/cart/cart.component';
import { CartItemComponent } from './shared/cart/cart-item/cart-item.component';
import { ItemsComponent } from './item-list/items/items.component';

@NgModule({
    declarations: [
      ServiceComponent,
      SharedComponent,
      ItemListComponent,
      NavComponent,
      ServiceCatagoriesComponent,
      CartComponent,
      CartItemComponent,
      ItemsComponent,
    ],
    imports: [
      BrowserModule,
      CommonModule,
    ],
    providers: [],
    bootstrap: [ServiceComponent]
  })
  export class AppModule { }
  
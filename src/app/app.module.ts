import { BrowserModule, } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServiceComponent } from './service/service.component';

import { NavComponent } from './service/shared/nav/nav.component';
import { ServiceCatagoriesComponent } from './service/shared/service-catagories/service-catagories.component';
import { CartComponent } from './service/shared/cart/cart.component';
import { ItemListComponent } from './service/item-list/item-list.component';
import { ItemsComponent } from './service/item-list/items/items.component';
import { CartItemComponent } from './service/shared/cart/cart-item/cart-item.component';

import { HaircutComponent } from './service/haircut/haircut.component';
import { PlumberComponent } from './service/plumber/plumber.component';
import { CarpenterComponent } from './service/carpenter/carpenter.component';
import { ElectricianComponent } from './service/electrician/electrician.component';
import { MechanicComponent } from './service/mechanic/mechanic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    ServiceComponent,
    ServiceCatagoriesComponent,
    CartComponent,
    ItemListComponent,
    ItemsComponent,
    CartItemComponent,
    PlumberComponent,
    HaircutComponent,
    ElectricianComponent,
    CarpenterComponent,
    MechanicComponent,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

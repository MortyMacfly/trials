import { Component, OnInit } from '@angular/core';
import { CartService } from './shared/cart.service';

import '../style/app.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Item } from './shared/item';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cartItems: Item[];

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cartService.items
      .subscribe(items => {
        this.cartItems = items;
      });
  }
}

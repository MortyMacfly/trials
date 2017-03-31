import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from './item';

@Injectable()
export class CartService {
  private _items: Item[] = [];
  items: Subject<Item[]>;

  constructor() {
    this.items = new Subject();
  }

  addItem(item: Item) {
    this._items.push(item);
    this.items.next(this._items);
  }
}

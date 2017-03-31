import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class CatalogService {
  getItems(): Promise<Item[]> {
    return Promise.resolve([
      {
        id: 0,
        name: 'KE01-03 ПЛАТОК 100%ШЕЛК',
        price: 1000,
        preview: '/img/items/item1.png'
      }, {
        id: 1,
        name: 'SWMAN2038-3 ШАРФ ЖЕН.',
        price: 850,
        preview: '/img/items/item3.png'
      }, {
        id: 2,
        name: 'GD1991A-BLUE GALADAY СУМКА',
        price: 2500,
        preview: '/img/items/item2.png'
      }, {
        id: 3,
        name: '12253A-W1-779 D.BROWN PALIO СУМКА',
        price: 2500,
        preview: '/img/items/item4.png'
      }, {
        id: 4,
        name: 'KE01-03 ПЛАТОК 100%ШЕЛК',
        price: 1000,
        preview: '/img/items/item1.png'
      }, {
        id: 5,
        name: 'GD1991A-BLUE GALADAY СУМКА',
        price: 2500,
        preview: '/img/items/item2.png'
      }, {
        id: 6,
        name: 'SWMAN2038-3 ШАРФ ЖЕН.',
        price: 850,
        preview: '/img/items/item3.png'
      }, {
        id: 7,
        name: '12253A-W1-779 D.BROWN PALIO СУМКА',
        price: 2500,
        preview: '/img/items/item4.png'
      }, {
        id: 8,
        name: 'KE01-03 ПЛАТОК 100%ШЕЛК',
        price: 1000,
        preview: '/img/items/item1.png'
      }, {
        id: 9,
        name: 'GD1991A-BLUE GALADAY СУМКА',
        price: 2500,
        preview: '/img/items/item2.png'
      }, {
        id: 10,
        name: 'SWMAN2038-3 ШАРФ ЖЕН.',
        price: 850,
        preview: '/img/items/item3.png'
      }, {
        id: 11,
        name: '12253A-W1-779 D.BROWN PALIO СУМКА',
        price: 2500,
        preview: '/img/items/item4.png'
      }, {
        id: 12,
        name: 'SWMAN2038-3 ШАРФ ЖЕН.',
        price: 850,
        preview: '/img/items/item3.png'
      }, {
        id: 13,
        name: '12253A-W1-779 D.BROWN PALIO СУМКА',
        price: 2500,
        preview: '/img/items/item4.png'
      }, {
        id: 14,
        name: 'KE01-03 ПЛАТОК 100%ШЕЛК',
        price: 1000,
        preview: '/img/items/item1.png'
      }, {
        id: 15,
        name: 'GD1991A-BLUE GALADAY СУМКА',
        price: 2500,
        preview: '/img/items/item2.png'
      }, {
        id: 16,
        name: 'SWMAN2038-3 ШАРФ ЖЕН.',
        price: 850,
        preview: '/img/items/item3.png'
      }, {
        id: 17,
        name: '12253A-W1-779 D.BROWN PALIO СУМКА',
        price: 2500,
        preview: '/img/items/item4.png'
      }
    ]);
  }
}

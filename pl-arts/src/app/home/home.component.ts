import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { CatalogService } from '../shared/catalog.service';
import { Article } from '../shared/article';
import { Item } from '../shared/item';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newsArticles: Article[];
  items: Item[];

  constructor(
    private newsService: NewsService,
    private catalogService: CatalogService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.newsService.getNews()
      .then(news => this.newsArticles = news);

    this.catalogService.getItems()
      .then(items => this.items = items);
  }

  addToCart(item: Item) {
    this.cartService.addItem(item);
  }
}

import { Component, inject } from '@angular/core';
import {productsService} from '../../data-acces/products.service'

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [productsService]
})
export default class ProductListComponent {
  private productsService = inject(productsService);

  constructor() {
    this.productsService.getProducts().subscribe((products) =>{
      console.log(products);
    });
  }
}

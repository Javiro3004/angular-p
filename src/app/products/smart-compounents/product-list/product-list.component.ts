import { Component, inject } from '@angular/core';
import { ProductsSateService } from '../../data-acces/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsSateService],
})
export default class ProductListComponent {
  productsState = inject(ProductsSateService);

  changePage(){
    const page = this.productsState.state.page() +1;
    this.productsState.changePage$.next(page)
  }
}

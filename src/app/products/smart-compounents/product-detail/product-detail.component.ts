import { Component, effect, inject, input } from '@angular/core';
import { ProductDetailSateService } from '../../data-acces/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  providers: [ProductDetailSateService],
})
export default class ProductDetailComponent {
  productDetailState = inject(ProductDetailSateService).state;
  id = input.required<string>();

  constructor() {
    effect(() => {
      this.productDetailState.getById(this.id());
    });
  }
}

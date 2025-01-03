import { Component, input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  product= input.required<Product>();
}

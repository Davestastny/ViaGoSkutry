import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { Observable, of } from "rxjs";
import { Product } from "../../models/product.model";
import { ProductDataService } from "../../services/product-data.service";
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    ProductCardComponent,
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  products$: Observable<Product[]> = of([]);

  constructor(private productService: ProductDataService) {}

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }
}

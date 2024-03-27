import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import {Observable, of} from 'rxjs';
import { Product } from "../../models/product.model";
import { ProductDataService } from "../../services/product-data.service";
import { AsyncPipe, NgForOf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-models',
  standalone: true,
  imports: [
    ProductCardComponent,
    AsyncPipe,
    NgForOf,
    CommonModule
  ],
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  products$: Observable<Product[]>  = of([]);

  constructor(private productService: ProductDataService) {}

  ngOnInit() {
    this.products$ = this.productService.getProducts(); // Zajistěte, že metoda getProducts() existuje a vrací Observable<Product[]>.
  }
}

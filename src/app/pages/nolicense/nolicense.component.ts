import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../../models/product.model';
import { ProductDataService } from '../../services/product-data.service';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { AsyncPipe, NgForOf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-nolicense',
  standalone: true,
  imports: [
    ProductCardComponent,
    AsyncPipe,
    NgForOf,
    CommonModule
  ],
  templateUrl: './nolicense.component.html',
  styleUrls: ['./nolicense.component.css']
})
export class NolicenseComponent implements OnInit {
  noLicenseProducts$!: Observable<Product[]>; // Použití '!' k označení, že proměnná bude inicializována později

  constructor(private productService: ProductDataService) {}

  ngOnInit() {
    this.noLicenseProducts$ = this.productService.getProducts().pipe(
      map(products => products.filter(product => product.slug === 'elektroskutr-viago-riga' || product.slug === 'elektroskutr-viago-tokio'))
    );
  }
}

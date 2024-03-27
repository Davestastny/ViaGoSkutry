import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../../models/product.model';
import { ProductDataService } from '../../services/product-data.service';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { AsyncPipe, NgForOf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-license',
  standalone: true,
  imports: [
    ProductCardComponent,
    AsyncPipe,
    NgForOf,
    CommonModule
  ],
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {
  licenseProducts$!: Observable<Product[]>; // Produkty, které vyžadují řidičák

  constructor(private productService: ProductDataService) {}

  ngOnInit() {
    this.licenseProducts$ = this.productService.getProducts().pipe(
      map(products => products.filter(product => product.slug !== 'elektroskutr-viago-riga' && product.slug !== 'elektroskutr-viago-tokio'))
    );
  }
}

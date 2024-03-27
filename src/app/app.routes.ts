import { Routes } from '@angular/router';
import { IndexComponent } from "./pages/index/index.component";
import { ModelsComponent } from "./pages/models/models.component";
import { NolicenseComponent } from "./pages/nolicense/nolicense.component";
import { LicenseComponent } from "./pages/license/license.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component";
import { CartComponent } from "./components/cart/cart.component"; // Import CartComponent

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'models', component: ModelsComponent },
  { path: 'nolicense', component: NolicenseComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product-detail/:slug', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent } // Přidáno
];

export class AppRoutingModule { }

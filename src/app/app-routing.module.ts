import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { UpdateProductComponent } from './components/products-area/update-product/update-product.component';

const routes: Routes = [
    { path: "home", component: HomeComponent, pathMatch: "full" },
    { path: "products", component: ProductListComponent, pathMatch: "full" },
    { path: "products/details/:id", component: ProductDetailsComponent, pathMatch: "full" },
    { path: "products/new", component: AddProductComponent },
    { path: "products/edit/:id", component: UpdateProductComponent },
    { path: "about", component: AboutComponent, pathMatch: "full" },
    { path: "", redirectTo: "/home", pathMatch: "full"},
    { path: "**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

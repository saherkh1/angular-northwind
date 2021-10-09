import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { DiscountComponent } from './components/home-area/discount/discount.component';
import { BuyNowComponent } from './components/home-area/buy-now/buy-now.component';
import { OrderComponent } from './components/home-area/order/order.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { SalesComponent } from './components/home-area/sales/sales.component';
import { LocationComponent } from './components/home-area/location/location.component';
import { SloganComponent } from './components/home-area/slogan/slogan.component';
import { ClockComponent } from './components/home-area/clock/clock.component';
import { TipComponent } from './components/home-area/tip/tip.component';
import { PricingComponent } from './components/home-area/pricing/pricing.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductCardComponent } from './components/products-area/product-card/product-card.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { UpdateProductComponent } from './components/products-area/update-product/update-product.component';
import { TestObservableComponent } from './components/about-area/test-observable/test-observable.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        HomeComponent,
        DiscountComponent,
        BuyNowComponent,
        OrderComponent,
        SalesComponent,
        LocationComponent,
        SloganComponent,
        ClockComponent,
        TipComponent,
        PricingComponent,
        ProductListComponent,
        AboutComponent,
        PageNotFoundComponent,
        ProductDetailsComponent,
        ProductCardComponent,
        AddProductComponent,
        UpdateProductComponent,
        TestObservableComponent
    ],
    imports: [
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }

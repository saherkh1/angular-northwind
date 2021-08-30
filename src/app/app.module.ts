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
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        HomeComponent,
        DiscountComponent,
        BuyNowComponent,
        OrderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    exports: [],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }

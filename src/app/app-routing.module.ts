import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { UpdateProductComponent } from './components/products-area/update-product/update-product.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { LoginComponent } from './components/auth-area/login/login.component';
import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { AuthGuard } from './services/auth.guard';
import { IncompleteGuard } from './services/incomplete.guard';
import { ContactUsComponent } from './components/contact-us-area/contact-us/contact-us.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    
    { path: "suppliers", loadChildren: () => import("./components/suppliers-area/suppliers.module").then(m => m.SuppliersModule) },

    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "logout", canActivate: [AuthGuard], component: LogoutComponent },

    { path: "products", component: ProductListComponent },
    { path: "products/details/:id", component: ProductDetailsComponent },

    { path: "products/new", canActivate: [AuthGuard], canDeactivate: [IncompleteGuard], component: AddProductComponent },
    { path: "products/edit/:id", canActivate: [AuthGuard], canDeactivate: [IncompleteGuard], component: UpdateProductComponent },

    { path: "about", component: AboutComponent },
    { path: "contact-us", component: ContactUsComponent },

    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

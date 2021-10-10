import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { IncompleteGuard } from 'src/app/services/incomplete.guard';
import { NotifyService } from 'src/app/services/notify.service';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    public product = new ProductModel(); //Create empty object: to use in the two-way binding
    constructor(private notify: NotifyService,private http: HttpClient, private myRouter: Router, private myProductsService: ProductsService) { }

    ngOnInit(): void {
    }

    public setImage(args: Event): void {
        this.product.image = (args.target as HTMLInputElement).files;
    }
    public async add() {
        try {
            //without service & redux
            // const myFormData = new FormData();
            // myFormData.append("name", this.product.name);
            // myFormData.append("price", this.product.price.toString());
            // myFormData.append("stock", this.product.stock.toString());
            // myFormData.append("image", this.product.image.item(0));
            // const addedProduct = await this.http.post<ProductModel>(environment.productUrl, myFormData).toPromise();
            
            await this.myProductsService.addProductAsync(this.product);

            IncompleteGuard.canLeave = true;

            this.notify.success("Product added");
            this.myRouter.navigateByUrl("/products");
        }
        catch (err: any) {
            this.notify.error(err.message);
        }
    }
    public changeOccurred(){
        IncompleteGuard.canLeave = false;
    }
}

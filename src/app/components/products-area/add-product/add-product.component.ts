import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product-model';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    public product = new ProductModel(); //Create empty object: to use in the two-way binding
    constructor(private http:HttpClient, private myRouter: Router) { }

    ngOnInit(): void {
    }

    public setImage(args: Event): void{
        this.product.image = (args.target as HTMLInputElement).files;
    }
    public async add(){
        try{
            const myFormData = new FormData();
            myFormData.append("name", this.product.name);
            myFormData.append("price", this.product.price.toString());
            myFormData.append("stock", this.product.stock.toString());
            myFormData.append("image", this.product.image.item(0));

            const addedProduct = await this.http.post<ProductModel>(environment.productUrl,myFormData).toPromise();
            alert("Product added with id:"+ addedProduct.id);
            this.myRouter.navigateByUrl("/products");
        }
        catch(err){
            alert(err);
        }
    }
}
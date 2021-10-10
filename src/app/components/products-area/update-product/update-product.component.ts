import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { IncompleteGuard } from 'src/app/services/incomplete.guard';
import { NotifyService } from 'src/app/services/notify.service';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-update-product',
    templateUrl: './update-product.component.html',
    styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

    private product = new ProductModel();

    public nameControl = new FormControl(null,[Validators.required,Validators.pattern("^[A-Z].*$")]);
    public priceControl = new FormControl(null,[Validators.required]);
    public stockControl = new FormControl(null,[Validators.required]);
    public imageControl = new FormControl();

    public productForm = new FormGroup({
        nameControl: this.nameControl,
        priceControle: this.priceControl,
        stockControl: this.stockControl,
        imageControl: this.imageControl
    });

    constructor(private notify: NotifyService ,private myActivatedRoute: ActivatedRoute,private myProductService: ProductsService, private myRouter :Router) { }

    async ngOnInit() {
        try{
            this.product.id = +this.myActivatedRoute.snapshot.params.id; 
            //without service & redux
            // const product = await this.http.get<ProductModel>(environment.productUrl+this.product.id).toPromise();
            
            //with service & redux
            const product = await this.myProductService.getOneProductAsync(this.product.id);
        
            this.nameControl.setValue(product.name);
            this.priceControl.setValue(product.price);
            this.stockControl.setValue(product.stock);

        }
        catch(err: any){
            this.notify.error(err.message)
        }
    }

    public setImage(args: Event){
        this.product.image = (args.target as HTMLInputElement).files;
    }

    public async update(){
        try {
            this.product.name = this.nameControl.value;
            this.product.price = this.priceControl.value;
            this.product.stock = this.stockControl.value;

            //without service & redux
            //if you dont have an image you can send this.product without using form data
            // const myFormData = new FormData();
            // myFormData.append("name",this.product.name);
            // myFormData.append("price",this.product.price.toString());
            // myFormData.append("stock",this.product.stock.toString());
            // myFormData.append("image",this.product.image.item(0));
            // await this.http.put<ProductModel>(environment.productUrl+ this.product.id, myFormData).toPromise();

            //with service & redux
            await this.myProductService.updateProductAsync(this.product);
            IncompleteGuard.canLeave = true;
            this.notify.success("Product updated");
            this.myRouter.navigateByUrl("/products");

            // await this.myProductsService.updateProductAsync(this.product);
            // alert("Product updated");
            // this.myRouter.navigateByUrl("/products");

        }
        catch (err: any) {
            this.notify.error(err.message);
        }
    }
    public changeOccurred(){
        IncompleteGuard.canLeave = false;
    }

}

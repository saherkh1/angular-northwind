import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product-model';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public imageUrl: string;

    public product: ProductModel;

    //dependency injection
    constructor(private myActivatedRout: ActivatedRoute, private http: HttpClient, private myProductsService: ProductsService) { }

    async ngOnInit() {
        try {
            //without rdux & service 
            // const id = this.myActivatedRout.snapshot.params.id;
            // this.product = await this.http.get<ProductModel>(environment.productUrl + id).toPromise();
            // this.imageUrl = environment.productImagesUrl + this.product.imageName;
            
            //With redux & service
            const id = +this.myActivatedRout.snapshot.params.id;
            this.product = await this.myProductsService.getOneProductAsync(id);
            this.imageUrl = environment.productImagesUrl + this.product.imageName;


        }
        catch (err: any) {
            alert(err.message);
        }
    }

}

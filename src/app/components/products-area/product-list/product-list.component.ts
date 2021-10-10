import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { NotifyService } from 'src/app/services/notify.service';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    public products: ProductModel[] = [];

    constructor(private notify: NotifyService ,private http: HttpClient, private myProductsService: ProductsService) { }

    async ngOnInit() {
        try {
            //without redux
            // this.products = await this.http.get<ProductModel[]>(environment.productUrl).toPromise();

            //With redux and service to help 
            this.products = await this.myProductsService.getAllProductsAsync();
        }
        catch (err: any) {
            this.notify.error(err.message);
        }
    }

}

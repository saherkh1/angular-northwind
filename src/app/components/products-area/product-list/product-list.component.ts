import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product-model';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    public products: ProductModel[] = [];

    constructor(private http: HttpClient) { }

    async ngOnInit() {
        try {
            this.products = await this.http.get<ProductModel[]>(environment.productUrl).toPromise();
        }
        catch (err) {
            alert(err);
        }
    }

}

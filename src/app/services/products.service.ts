import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../models/product.model';
import { ProductsActionType } from '../redux/products-state';
import store from '../redux/Store';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }

    public async getAllProductsAsync(): Promise<ProductModel[]> {
        if (store.getState().productsState.products.length === 0) {
            const products = await this.http.get<ProductModel[]>(environment.productUrl).toPromise();
            store.dispatch({ type: ProductsActionType.ProductsDownloaded, payload: products });
        }
        return store.getState().productsState.products;
    }

    public async getOneProductAsync(id: number): Promise<ProductModel> {
        const products = await this.getAllProductsAsync();
        return products.find(p => p.id === id);
    }

    public async addProductAsync(product: ProductModel): Promise<ProductModel> {
        const myFormData = new FormData();
        myFormData.append("name", product.name);
        myFormData.append("price", product.price.toString());
        myFormData.append("stock", product.stock.toString());
        myFormData.append("image", product.image.item(0));
        const addedProduct = await this.http.post<ProductModel>(environment.productUrl, myFormData).toPromise();
        store.dispatch({ type: ProductsActionType.ProductAdded, payload: addedProduct })
        return addedProduct;
    }
    public async updateProductAsync(product: ProductModel): Promise<ProductModel> {
        const myFormData = new FormData();
        myFormData.append("name", product.name);
        myFormData.append("price", product.price.toString());
        myFormData.append("stock", product.stock.toString());
        if (product.image)
            myFormData.append("image", product.image.item(0));
        const upddatedProduct = await this.http.put<ProductModel>(environment.productUrl + product.id, myFormData).toPromise();
        store.dispatch({ type: ProductsActionType.ProductUpdated, payload: upddatedProduct })
        return upddatedProduct;
    }
}

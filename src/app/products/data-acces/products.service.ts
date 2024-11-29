import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-acces/base-http.service";
import { Observable } from "rxjs";
import { Product } from "../interfaces/product.interface";

@Injectable ()
export class productsService extends BaseHttpService{
    getProducts ():Observable<Product[]> {
        return this.http.get<any>(`${this.apiUrl}/products`)
    }
}
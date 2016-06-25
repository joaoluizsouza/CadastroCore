import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Product } from '../';
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class ProductService {
    private headers: Headers;
    private _apiUrl: string = "../../../mocks/";
    constructor(private _http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    getProducts() {
        return this._http.get(this._apiUrl + "products.js")
            .map(res => res.json())
            .catch(this.throwError);
    }
    getProduct(id: number) {
        return this._http.get(this._apiUrl + "products/:id".replace(":id", id.toString()))
            .map(res => res.json())
            .catch(this.throwError);
    }
    private throwError(response) {
        return Observable.throw(response.json().error || "Server error")
    }
}
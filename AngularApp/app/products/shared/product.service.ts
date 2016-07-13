import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from './product.model';
import "rxjs/Rx";

@Injectable()
export class ProductService {
    private headers: Headers;
    private apiUrl: string = "http://localhost:5000/api/";
    constructor(private http: Http) {
        this.headers = new Headers({ "Content-Type": "application/json"});
    }
    public getProducts() {
        return this.http.get(this.apiUrl + "product")
            .map(res => res.json())
            .catch(this.throwError);
    }
    public getProduct(id: number) {
        return this.http.get(this.apiUrl + "product/:id".replace(":id", id.toString()))
            .map(res => res.json())
            .catch(this.throwError);
    }
    public postProduct(product : Product) {
        return this.http.post(this.apiUrl + "product", JSON.stringify(product),{headers: this.headers})
            .map(res => res)
            .catch(this.throwError);
    }
    private throwError(response) {
        return Observable.throw(response.json().error || "Server error")
    }
}

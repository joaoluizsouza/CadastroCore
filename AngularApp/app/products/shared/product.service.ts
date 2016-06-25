import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class ProductService {
    private headers: Headers;
    private apiUrl: string = "../../../mocks/";
    constructor(private http: Http) {
        this.headers = new Headers({ "Content-Type": "application/json" });
    }

    public getProducts() {
        return this.http.get(this.apiUrl + "products.js")
            .map(res => res.json())
            .catch(this.throwError);
    }

    public getProduct(id: number) {
        return this.http.get(this.apiUrl + "products/:id".replace(":id", id.toString()))
            .map(res => res.json())
            .catch(this.throwError);
    }
    private throwError(response) {
        return Observable.throw(response.json().error || "Server error")
    }
}

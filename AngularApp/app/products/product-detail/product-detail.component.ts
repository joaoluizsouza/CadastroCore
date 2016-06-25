import { NgForm } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router, RouteParams } from "@angular/router-deprecated";

import { Product } from "../shared/product.model";
import { ProductService } from "../shared/product.service";

@Component({
    moduleId: module.id,
    providers: [ProductService],
    templateUrl: "product-detail.component.html"}
)
export class ProductDetailComponent implements OnInit {
    private product: Product;

    constructor(private routeParams: RouteParams, private productService: ProductService, private router: Router) { }
    public ngOnInit() {
        this.product = {id: 10, image: "", name: "Joao", price: 20};
        // let idProduct = <number> <any> this.routeParams.get("id");
        // this._productService.getProduct(idProduct).
        // subscribe(data => this._product = data, error => console.log(error));
     }
    public goList(): void {
        this.router.navigate(["Product"]);
    }
    get diagnostic() { return JSON.stringify(this.product); }
}
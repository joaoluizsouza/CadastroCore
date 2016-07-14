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
    public erro: string;
    public sucesso: string;
    private product: Product;

    constructor(private routeParams: RouteParams, private productService: ProductService, private router: Router) { }
    public ngOnInit() {
        this.product = new Product();
        let idProduct: number = <number> <any> this.routeParams.get("id");
        if (idProduct != 0) {
            this.productService.getProduct(idProduct).
            subscribe(data => this.product = data, error => this.onError(error));
        }
    }
    public goList(): void {
        this.router.navigate(["Product"]);
    }
    public onSubmit(): void {
        this.product.id = <number> <any> this.routeParams.get("id");
        if (this.product.id == 0) {
            this.productService.postProduct(this.product).
            subscribe(data => this.onSucess(data),
            error => this.onError(error));
        }else {
            this.productService.putProduct(this.product.id, this.product).
            subscribe(data => this.onSucess(data),
            error => this.onError(error));
        }
    }
    private onError(erro): void {
        this.erro = erro;
    }
    private onSucess(sucesso): void {
        this.sucesso = sucesso;
    }
}
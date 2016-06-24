import { NgForm } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Router,RouteParams } from "@angular/router-deprecated";
import { ProductService } from './product.service';
import { Product } from './Product';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html',
    providers:[ProductService]
})
export class ProductDetailComponent implements OnInit {
    @Input('product') public _product: Product;

    active = true;
    public model : Product;

        
    constructor(private _routeParams: RouteParams, private _productService: ProductService, private _router: Router) { }

    ngOnInit() {
        this.model = {name:"Joao",id:10,image:"",price:20};
        let idProduct = <number><any>this._routeParams.get("id");
        //this._productService.getProduct(idProduct).subscribe(data => this._product = data, error => console.log(error));
     }
    goList(): void {
        this._router.navigate(["Product"]);
    }

    get diagnostic() { return JSON.stringify(this.model); }
}
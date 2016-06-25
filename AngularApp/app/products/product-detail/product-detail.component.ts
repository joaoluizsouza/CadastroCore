import { NgForm } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Router,RouteParams } from "@angular/router-deprecated";
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html',
    providers:[ProductService]
})
export class ProductDetailComponent implements OnInit {
    private _product: Product;
    
    active = true;
    constructor(private _routeParams: RouteParams, private _productService: ProductService, private _router: Router) { }
    ngOnInit() {
        this._product = {name:"Joao",id:10,image:"",price:20};
        let idProduct = <number><any>this._routeParams.get("id");
        //this._productService.getProduct(idProduct).subscribe(data => this._product = data, error => console.log(error));
     }
    goList(): void {
        this._router.navigate(["Product"]);
    }
    get diagnostic() { return JSON.stringify(this._product); }
}
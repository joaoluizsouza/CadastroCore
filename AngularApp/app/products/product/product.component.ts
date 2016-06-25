import { Component, OnInit } from '@angular/core';
import { ProductService, Product,ProductListComponent  } from '../';
import { Router } from "@angular/router-deprecated";

@Component({
    moduleId: module.id,
    templateUrl: 'product.component.html',
    providers:[ProductService],
    directives:[ProductListComponent]
})
export class ProductComponent implements OnInit {
    public products: Product[] = [];
    constructor(private _productService:ProductService, private _router: Router) { }
    ngOnInit() { 
        this._productService.getProducts()
            .subscribe(data => this.products = data, error => console.log(error));
    }
    onClick(){
        console.log(this.products);
    }
    onEdit(_prod : Product){
        console.log('Edit Component: ' + JSON.stringify(_prod));
        this._router.navigate(["ProductDetail",{id:_prod.id}]);
    }
    onDelete(prod: Product){
        console.log('Delete Component: ' + JSON.stringify(prod));
    }
}
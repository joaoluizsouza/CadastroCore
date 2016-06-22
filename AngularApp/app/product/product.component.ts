import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
    moduleId: module.id,
    templateUrl: 'product.component.html',
    providers:[ProductService]
})
export class ProductComponent implements OnInit {
    public products: Product[] = [];
    constructor(private _productService:ProductService) { }

    ngOnInit() { 
        this._productService.getProducts()
            .subscribe(data => this.products = data, error => console.log(error));
    }

    onClick(){
        console.log(this.products);
    }
}
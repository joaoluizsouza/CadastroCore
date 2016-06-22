import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { ProductListComponent } from './productlist.component';

@Component({
    moduleId: module.id,
    templateUrl: 'product.component.html',
    providers:[ProductService],
    directives:[ProductListComponent]
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
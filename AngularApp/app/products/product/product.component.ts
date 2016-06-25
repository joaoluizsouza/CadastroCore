import { Component, OnInit } from "@angular/core";

import { Product } from "../shared/product.model";
import { ProductListComponent  } from "../product-list/product-list.component";
import { ProductService } from "../shared/product.service";
import { Router } from "@angular/router-deprecated";

@Component({
    directives: [ProductListComponent],
    moduleId: module.id,
    providers: [ProductService],
    templateUrl: "product.component.html"}
)
export class ProductComponent implements OnInit {
    public products: Product[] = [];
    constructor(private productService: ProductService, private router: Router) { }
    public ngOnInit() {
        this.productService.getProducts()
            .subscribe(data => this.products = data, error => console.log(error));
    }
    public onClick(){
        console.log(this.products);
    }
    public onEdit(prod: Product){
        this.router.navigate(["ProductDetail", {id: prod.id}]);
    }
    public onDelete(prod: Product){
        console.log("Delete Component: " + JSON.stringify(prod));
    }
}
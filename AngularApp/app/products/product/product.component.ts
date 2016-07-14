import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router-deprecated";

import { Product } from "../shared/product.model";
import { ProductListComponent  } from "../product-list/product-list.component";
import { ProductService } from "../shared/product.service";
// import { ToasterContainerComponent, ToasterService } from "angular2-toaster/angular2-toaster";

@Component({
    directives: [ProductListComponent], // ToasterContainerComponent
    moduleId: module.id,
    providers: [ProductService ], //  ToasterService
    templateUrl: "product.component.html"}
)
export class ProductComponent implements OnInit {
    public products: Product[] = [];
    constructor(private productService: ProductService, private router: Router) {} 
        // private toasterService: ToasterService,
    public ngOnInit() {
        this.productService.getProducts()
            .subscribe(data => this.products = data, error => console.log(error));
    }
    public onClick() {
        console.log(this.products);
    }
    public onEdit(prod: Product) {
        this.router.navigate(["ProductDetail", {id: prod.id}]);
    }
    public onDelete(prod: Product) {
         this.productService.deleteProduct(prod.id)
            .subscribe(data => this.okDelete(data, prod), error => console.log(error));
    }
    public onNew() {
        this.router.navigate(["ProductDetail", {id: 0}]);
    }
    private okDelete(data, prod: Product) {
        let index = this.products.indexOf(prod, 0);
        if (index > -1) {
            this.products.splice(index, 1);
        }
        this.popToastDelete(prod);
    }
    private popToastDelete(prod: Product): void {
        // this.toasterService.pop("success", "Deletado", prod.name + " foi deletado com sucesso!");
    }
}

import { Component, OnInit, Input } from '@angular/core';
import { Product } from './Product';

@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'productlist.component.html'
})
export class ProductListComponent implements OnInit {
    @Input()
    private products: Product[];

    constructor() { }
    ngOnInit() { }
}
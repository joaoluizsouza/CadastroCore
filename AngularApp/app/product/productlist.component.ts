import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'productlist.component.html',
    inputs: ['products'],
})
export class ProductListComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
    }

}
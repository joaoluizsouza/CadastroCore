import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './Product';

@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'productlist.component.html'
})
export class ProductListComponent implements OnInit {
    @Output() private _eventsEdit = new EventEmitter();
    @Output() private _eventsDelete = new EventEmitter();
    @Input() private products: Product[];

    constructor() { }
    ngOnInit() { }
    
    onEdit(_prod : Product){
        this._eventsEdit.emit(_prod);
    }
    onDelete(_prod: Product){
        this._eventsDelete.emit(_prod);
    }
}
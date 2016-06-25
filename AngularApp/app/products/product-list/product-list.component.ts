import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Product } from "../shared/product.model";

@Component({
    moduleId: module.id,
    selector: "core-product-list",
    templateUrl: "product-list.component.html"}
)
export class ProductListComponent {
    @Output() private editEvent = new EventEmitter();
    @Output() private deleteEvent = new EventEmitter();
    @Input() private products: Product[];

    public onEdit(prod: Product) {
        this.editEvent.emit(prod);
    }
    public onDelete(prod: Product) {
        this.deleteEvent.emit(prod);
    }
}
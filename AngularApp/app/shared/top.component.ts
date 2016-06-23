import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    moduleId: module.id,
    selector: 'top-view',
    templateUrl: 'top.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class TopComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
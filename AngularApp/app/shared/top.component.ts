import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router-deprecated";

@Component({
    directives: [ROUTER_DIRECTIVES],
    moduleId: module.id,
    selector: "core-top-view",
    templateUrl: "top.component.html"}
)

export class TopComponent {
}

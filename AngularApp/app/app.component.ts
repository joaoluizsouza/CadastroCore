import { Component } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES } from "@angular/router-deprecated";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductComponent  } from "./products/product/product.component";
import { ProductDetailComponent  } from "./products/product-detail/product-detail.component";
import { TopComponent } from "./shared/top.component";

@Component({
  directives: [ROUTER_DIRECTIVES, TopComponent],
  moduleId: module.id,
  selector: "core-my-app",
  templateUrl: "app.component.html",
})
@RouteConfig([
  { component: DashboardComponent, name: "Dashboard", path: "/dashboard", useAsDefault: true },
  { component: ProductComponent, name: "Product", path: "/product" },
  { component: ProductDetailComponent, name: "ProductDetail", path: "/product/:id"},
])
export class AppComponent {}

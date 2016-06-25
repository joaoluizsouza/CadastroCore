import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent, ProductDetailComponent } from './products';
import { TopComponent } from './shared/top.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, TopComponent]
})
@RouteConfig([
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/product', name: 'Product', component: ProductComponent},
  { path: "/product/:id", name: "ProductDetail", component: ProductDetailComponent }
])
export class AppComponent {}
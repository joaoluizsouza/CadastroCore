import { bootstrap }    from "@angular/platform-browser-dynamic";
import { AppComponent } from "./app.component";
import { ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { HTTP_PROVIDERS } from "@angular/http";
import { disableDeprecatedForms, provideForms } from "@angular/forms";

bootstrap(AppComponent, [ ROUTER_PROVIDERS, HTTP_PROVIDERS, disableDeprecatedForms(), provideForms()] );

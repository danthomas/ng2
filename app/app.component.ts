import { Component } from 'angular2/core';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';


import { TestComponent } from './test.component';
import { ListComponent } from './list.component';


@RouteConfig([
    { path: '/test', name: 'Test', component: TestComponent, useAsDefault: true },
    { path: '/list', name: 'List', component: ListComponent }
])
@Component({
    template: `<div class='container'>
            <router-outlet></router-outlet>
        </div>`, 
    selector : 'app',
    directives : [ROUTER_DIRECTIVES],
    providers : [ROUTER_PROVIDERS]
})
export class AppComponent {
    
}
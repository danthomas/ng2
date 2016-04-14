import { Component } from 'angular2/core';

@Component({
    templateUrl: 'app/home/welcome.component.html', selector : 'welcome'
})
export class WelcomeComponent {
    public pageTitle: string = "Welcome";
}
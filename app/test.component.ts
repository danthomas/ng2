import { Component, Input } from 'angular2/core';

class Thing{
    name : string;
    
    constructor(name : string){
        this.name = name;
    }
}


@Component({
    template: `
    <input [(ngModel)]="thing.name" type="text" />
    `, 
    selector: 'child'
})
export class ChildComponent {
   @Input() thing : Thing;
}

@Component({
    template: `    
    <button (click)="click()">Click</button>
   <child [thing]="_thing"></child>
    `, directives: [ChildComponent]
})
export class TestComponent {
    private _thing : Thing;
    
    constructor(){
        this._thing = new Thing('dan')
    }
    
    click(){
        console.log(this._thing.name);
    }
}

import { Component } from 'angular2/core';

@Component({
    template: `    
    
    <div>{{logDetails}}</div>
    
    
    <div><input type='checkBox' [ngModel]='allSelected' (click)='onAllSelectedClick()' /></div>
    
    <div><input type='checkBox' [ngModel]='isSelected(0)' (click)='onClick(0)' /></div>
    <div><input type='checkBox' [ngModel]='isSelected(1)' (click)='onClick(1)'/></div>
    <div><input type='checkBox' [ngModel]='isSelected(2)' (click)='onClick(2)'/></div>
    
    `
})
export class TestComponent {
    logDetails : string;
    value : string = 'abcd';
    allSelected : boolean = false;
    selected : boolean[] = [true, false, true];
    
    isSelected(index: number){
        return this.allSelected || this.selected[index];
    }
    
    onAllSelectedClick(index: number){
        this.allSelected = !this.allSelected;
        this.log();
    }
    
    onClick(index: number){
        this.selected[index] = !this.selected[index];
        this.log(); 
    }
    
    log(){       
        this.logDetails = '' + this.allSelected + ' : ' + this.selected;
    }
}